const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|dist\/)/,
    loader: 'babel-loader',
  },
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'eslint-loader',
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      use: 'css-loader',
    }),
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    loader: 'file-loader',
  },
];
