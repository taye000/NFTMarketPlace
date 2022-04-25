require("@nomiclabs/hardhat-waffle");



module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url: "https://polygon-mumbai.g.alchemy.com/v2/C03hF-P4h8wmJHdUh6CjRI0QLB_UKr5w"
    },
    mainnet:{
      url: "https://polygon-mainnet.g.alchemy.com/v2/C03hF-P4h8wmJHdUh6CjRI0QLB_UKr5w",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};
