const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.config');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

module.exports = merge(common, {
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  devServer: {
    contentBase: './dist',
    noInfo: true, // don't print bundle build stats
    inline: true, // embed the webpack-dev-server runtime into the bundle
    historyApiFallback: true, // server index.html in place of 404 responses to allow HTML5 history
    port: PORT,
    host: HOST,
    hot: true, // enable hot module loading
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
