require("@nomiclabs/hardhat-waffle");



module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url: "",
      accounts:[""]
    },
    mainnet:{
      url: "",
      accounts:[""]
    }
  },
  solidity: "0.8.4",
};
