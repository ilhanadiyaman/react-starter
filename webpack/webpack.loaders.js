module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|dist\/)/,
    loader: 'babel-loader'
  }
];
