const BitcoinERC721 = artifacts.require("BitcoinERC721");

module.exports = function (deployer) {
  deployer.deploy(BitcoinERC721);
};
