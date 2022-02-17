const web3 = require("web3");
const BTCToken = artifacts.require("BTCToken");
const BitcoinERC721 = artifacts.require("BitcoinERC721");
const NFTMarketplace = artifacts.require("NFTMarketplace");

contract('Marketplace with custom ERC20', accounts => {
    const [deployerAddress, tokenAddr1] = accounts;
    it("Minting NFTs", async () => {
        let NFT = await BitcoinERC721.deployed();
        await NFT.mint({ from: accounts[1] });
        await NFT.mint({ from: accounts[2] });
    })

    it("it is possible to set royalties", async () => {
        let NFT = await BitcoinERC721.deployed();
        await NFT.setRoyalties(0, accounts[6], 1000);
        await NFT.setRoyalties(1, accounts[2], 500);
        let royalties0 = await NFT.getRaribleV2Royalties(0);
        let royalties1 = await NFT.getRaribleV2Royalties(1);
        assert.equal(royalties0[0].value, '1000');
        assert.equal(royalties0[0].account, accounts[6]);
        assert.equal(royalties1[0].value, '500');
        assert.equal(royalties1[0].account, accounts[2]);
    })

    it("able to Create and Fetch Market Item", async () => {
        let Token = await BTCToken.new();
        let NFT = await BitcoinERC721.deployed();
        let MarketPlace = await NFTMarketplace.new(Token.address);
        await NFT.approve(MarketPlace.address, 0, { from: accounts[1] });
        await NFT.approve(MarketPlace.address, 1, { from: accounts[2] });
        await MarketPlace.createMarketItem(NFT.address, 0, 200, { from: accounts[1] });
        await MarketPlace.createMarketItem(NFT.address, 1, 150, { from: accounts[2] });
        await Token.transfer(accounts[3], 10000);
        await Token.approve(MarketPlace.address, 200, { from: accounts[3] });
        await MarketPlace.createMarketSale(NFT.address, 1, { from: accounts[3] });
        let balanceOfOwner = await Token.balanceOf(accounts[6]);
        assert.equal(balanceOfOwner.toString(), "20");
        let balanceOfMarketplace = await Token.balanceOf(MarketPlace.address);
        assert.equal(balanceOfMarketplace.toString(), '5');
        await NFT.approve(MarketPlace.address, 0, { from: accounts[3] });
        await MarketPlace.createMarketItem(NFT.address, 0, 400, { from: accounts[3] });
        await Token.transfer(accounts[4], 1000);
        await Token.approve(MarketPlace.address, 400, { from: accounts[4] });
        await MarketPlace.createMarketSale(NFT.address, 3, { from: accounts[4] });
        let newBalanceOfOwner = await Token.balanceOf(accounts[6]);
        assert.equal(newBalanceOfOwner.toString(), "60");
    });
    
})