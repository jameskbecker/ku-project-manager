const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
console.log(commonConfig);
const config = {
  mode: 'production',
};

module.exports = merge(commonConfig, config);
