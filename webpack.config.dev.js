const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    port: 8001,
    watchContentBase: true,
    progress: true,
  },
  devtool: 'source-map'
});
