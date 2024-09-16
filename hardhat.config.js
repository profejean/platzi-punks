require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity:  {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL, 
      accounts: [`0x${process.env.PRIVATE_KEY}`] 
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY  
  }
};
