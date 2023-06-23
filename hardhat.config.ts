require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_API,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};
