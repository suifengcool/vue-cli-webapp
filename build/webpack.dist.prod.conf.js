const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const distCommonWebpackConfig = require('./webpack.dist.common.conf');

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    'xxb-ui.rem': './src/xxb-ui.js'
  },
  vue: {
    loaders: {
      less: ExtractTextPlugin.extract('css!less')
    }
  },
  plugins: [
    new ExtractTextPlugin('xxb-ui.rem.css')
  ]
});
