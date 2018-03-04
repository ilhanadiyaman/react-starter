const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.config');

module.exports = merge(common, {
  plugins: [
    // Production mode
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  optimization: {
    minimize: true,
  },
});
