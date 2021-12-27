const axios = require('axios').default;
const blocknative = 'https://api.blocknative.com/gasprices/blockprices';
// const web3utils = require('web3-utils');

const blocknativeAPI = '712b5e7c-1bf2-44b8-8fb6-d41cd4ce1e8a';

const main = async () => {
  axios
    .get(blocknative, {
      headers: { Authorization: blocknativeAPI },
    })
    .then(function (response) {
      const blocknativeGasPrice = response.data;
      console.log(blocknativeGasPrice);
      blocknativeGasPrice.blockPrices[0].estimatedPrices.forEach((element) => {
        console.log(element);
      });
    });
};
main().catch(console.error);
