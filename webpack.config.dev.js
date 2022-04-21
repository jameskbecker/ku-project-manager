const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      '/local/**': {
        target: 'http://localhost:8081/',
        pathRewrite: { '^/local': '' },
        secure: false,
        logLevel: 'debug',
      },
    },
  },
};

module.exports = merge(commonConfig, config);
