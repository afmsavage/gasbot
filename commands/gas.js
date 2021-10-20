const axios = require('axios').default;
const defisaver = 'https://app.defisaver.com/api/gas-price/current';
const web3utils = require('web3-utils');

module.exports = {
  name: 'gas',
  description: 'get eth gas price',
  async execute(message) {
    axios.get(defisaver).then(function (response) {
      const defisaverGasPrice = response.data;
      message.channel.send(`

      #### DEFISAVER.COM ####
fast: ${defisaverGasPrice.fast}
regular: ${defisaverGasPrice.regular}`);
    });
  },
};
