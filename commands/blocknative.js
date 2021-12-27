const axios = require('axios').default;
const blocknative = 'https://api.blocknative.com/gasprices/blockprices';
const web3utils = require('web3-utils');

const blocknativeAPI = '712b5e7c-1bf2-44b8-8fb6-d41cd4ce1e8a';

module.exports = {
  name: 'blocknative',
  description: 'get eth gas price from blocknative.com',
  async execute(message) {
    axios
      .get(blocknative, {
        headers: { Authorization: blocknativeAPI },
      })
      .then(function (response) {
        const blocknativeGasPrice = response.data;
        message.channel.send(`
      #### Blocknative.com ####
      confidence 99%: ${blocknativeGasPrice.blockPrices[0].estimatedPrices[0].price}
      confidence 95%: ${blocknativeGasPrice.blockPrices[0].estimatedPrices[1].price}
      confidence 70%: ${blocknativeGasPrice.blockPrices[0].estimatedPrices[4].price}`);
      });
  },
};
