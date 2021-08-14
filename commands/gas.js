

const axios = require('axios').default;
const gasnow = 'https://www.gasnow.org/api/v3/gas/price';
const defisaver = 'https://app.defisaver.com/api/gas-price/current'
const web3utils = require('web3-utils');

module.exports = {
  name: 'gas',
  description: 'get eth gas price',
  async execute(message) {
    axios.get(gasnow).then(function (response) {
      const gasNowGasPrice = response.data.data;
      let BN = web3utils.BN;
      message.channel.send(`
     #### GASNOW.ORG ####
fast: ${web3utils.fromWei(new BN(gasNowGasPrice.fast).toString(), 'gwei')}
standard: ${web3utils.fromWei(new BN(gasNowGasPrice.standard).toString(), 'gwei')}`);
    });
    axios.get(defisaver).then(function (response) {
      const defisaverGasPrice = response.data;
      message.channel.send(`

      #### DEFISAVER.COM ####
fast: ${defisaverGasPrice.fast}
regular: ${defisaverGasPrice.regular}`)
    });
  },
};
