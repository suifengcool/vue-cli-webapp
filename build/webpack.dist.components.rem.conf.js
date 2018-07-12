const merge = require('webpack-merge');
const distCommonWebpackConfig = require('./webpack.dist.common.conf');

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    "/lib.rem/layout/index": "./src/components/layout/index.js",
  }
});
