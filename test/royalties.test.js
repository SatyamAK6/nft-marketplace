const BitcoinERC721 = artifacts.require("BitcoinERC721");

contract('ERC721 with Royalties', accounts => {
    // const [deployerAddress, tokenAddr1] = accounts;

    // it("is possible to mint tokens", async () => {
    //     let token = await BitcoinERC721.deployed();
    //     await token.mint({ from: tokenAddr1 });
    //     await token.mint({ from: accounts[2] });
    // });

    // it("is possible to set royalties", async () => {
    //     let token = await BitcoinERC721.deployed();
    //     await token.setRoyalties(0, deployerAddress, 1000);
    //     await token.setRoyalties(1, "0x697f9440f8F56b1613FFeb050bEF0B79d3077228", 500);
    //     let royalties0 = await token.getRaribleV2Royalties(0);
    //     let royalties1 = await token.getRaribleV2Royalties(1);
    //     // console.log(royalties0);
    //     // console.log(royalties1);
    //     assert.equal(royalties0[0].value, '1000');
    //     assert.equal(royalties0[0].account, deployerAddress);
    //     assert.equal(royalties1[0].value, '500');
    //     assert.equal(royalties1[0].account, "0x697f9440f8F56b1613FFeb050bEF0B79d3077228");
    // });

    // it("worked with ERC2981 Royalties", async () => {
    //     let token = await BitcoinERC721.deployed();
    //     let royalties = await token.royaltiesInfo(0, 500);
    //     // console.log(royalties);
    //     assert.equal(royalties[0].value.toString(), '50');
    //     assert.equal(royalties[0].account, deployerAddress);
    //     // assert.equal(royalties[1].value.toString(), '25');
    //     // assert.equal(royalties[1].account, "0x697f9440f8F56b1613FFeb050bEF0B79d3077228");
    // })
});