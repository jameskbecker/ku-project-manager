const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const config = {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      BASE_URL: JSON.stringify('https://kupm-api2.herokuapp.com'),
    }),
  ],
};

module.exports = merge(commonConfig, config);
