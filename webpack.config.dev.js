const { DefinePlugin } = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: JSON.stringify('http://localhost:8081'),
    }),
  ],
};

module.exports = merge(commonConfig, config);
