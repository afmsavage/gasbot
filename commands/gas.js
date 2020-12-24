

const axios = require('axios').default;
const url = 'https://www.gasnow.org/api/v3/gas/price';

module.exports = {
    name: 'gas',
    description: 'get eth gas price',
    async execute(message) {
      axios.get(url).then(function (response) {
        const gasPrice = response.data.data;
        message.channel.send(`
        rapid: ${gasPrice.rapid}
        fast: ${gasPrice.fast}
        standard: ${gasPrice.standard}
        slow: ${gasPrice.slow}`);
      });
    },
  };
