

const axios = require('axios').default;
const url = 'https://www.gasnow.org/api/v3/gas/price';
const web3utils = require('web3-utils');

module.exports = {
  name: 'gas',
  description: 'get eth gas price',
  async execute(message) {
    axios.get(url).then(function (response) {
      const gasPrice = response.data.data;
      let BN = web3utils.BN;
      message.channel.send(`
rapid: ${web3utils.fromWei(new BN(gasPrice.rapid).toString(), 'gwei')}
fast: ${web3utils.fromWei(new BN(gasPrice.fast).toString(), 'gwei')}
standard: ${web3utils.fromWei(new BN(gasPrice.standard).toString(), 'gwei')}
slow: ${web3utils.fromWei(new BN(gasPrice.slow).toString(), 'gwei')}`);
    });
  },
};
