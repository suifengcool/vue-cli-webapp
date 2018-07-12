const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./base.conf');
const pkg = require('../package.json');

module.exports = merge(baseWebpackConfig, {
    output: {
      path: path.join(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: "[name].js",
      chunkFilename: "[name].js",
      library: 'xxb-ui',
      libraryTarget: 'umd'
    },
    externals: {
      vue: 'vue'
    },
    plugins: [
      new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by XuGang (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
});
