const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

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
    path: path.join(__dirname, 'dist'), // output folder
    publicPath: '/',
    filename: 'bundle.js' // output file name
  },
  devServer: {
    contentBase: './dist',
    noInfo: true, // don't print bundle build stats
    inline: true, // embed the webpack-dev-server runtime into the bundle
    historyApiFallback: true, // server index.html in place of 404 responses to allow HTML5 history
    port: PORT,
    host: HOST,
    hot: true // enable hot module loading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
