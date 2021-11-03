const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { spawn } = require('child_process');
module.exports = {
  mode: 'development',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api/**': {
        target: 'http://localhost:8080/',
        pathRewrite: { '^/api': '' },
        secure: false,
        logLevel: 'debug',
      },
    },
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // alias: {
    //   global: path.resolve(__dirname, 'src/renderer/components/global'),
    //   pages: path.resolve(__dirname, 'src/renderer/components/pages'),
    //   forms: path.resolve(__dirname, 'src/renderer/components/forms'),
    //   shared: path.resolve(__dirname, 'src/renderer/components/shared'),
    //   store: path.resolve(__dirname, 'src/renderer/store')
    // }
  },
  module: {
    rules: [
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets', 'index.html'),
    }),
  ],
};
