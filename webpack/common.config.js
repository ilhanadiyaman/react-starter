const path = require('path');
const loaders = require('./loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js' // app's entry point
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  output: {
    path: path.join(__dirname, '..', 'dist'), // output folder
    publicPath: '/',
    filename: 'bundle.js' // output file name
  },
  plugins: [
    new ExtractTextPlugin('style.bundle.css'),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
