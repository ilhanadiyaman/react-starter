const path = require('path');
const loaders = require('./loaders');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js', // app's entry point
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  output: {
    path: path.join(__dirname, '..', 'dist'), // output folder
    publicPath: '/',
    filename: 'bundle.js', // output file name
  },
};
