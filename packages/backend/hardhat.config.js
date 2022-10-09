/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
const { alchemyApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: "0.8.17",
      networks: {
       rinkeby: {
         url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
         accounts: { mnemonic: mnemonic },
       },
     },
};
