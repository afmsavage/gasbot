const axios = require('axios').default;
const blocknative = 'https://api.blocknative.com/gasprices/blockprices';
// const web3utils = require('web3-utils');

const blocknativeAPI = process.env.BLOCKNATIVE;

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
