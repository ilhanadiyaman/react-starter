module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|dist\/)/,
    loader: 'babel-loader'
  },
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'eslint-loader'
  }
];
