require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-web3-v4");

// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

//use configuration-variables in hardhat to set PRIVATE_KEY variable
const PRIVATE_KEY = vars.get("a5998bc00e8a79b4e54b87689c29a32ccb4932abd434e6383183d876c8a1bfcc");

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
