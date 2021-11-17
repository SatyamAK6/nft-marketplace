require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim();
const infuraKey = fs.readFileSync(".infura").toString().trim();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
