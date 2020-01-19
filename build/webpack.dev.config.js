const path = require('path');
const dirConfig = require('../config/dir.construtor');
const externals = require('./webpack.externals.config');
const resolve = require('./webpack.resolve.config');
const vueLoaderOptions = require('./vue-loader.config');

module.exports = {
  entry: path.resolve(dirConfig.src, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: dirConfig.dist
  },
  devtool: '#eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderOptions
      }
    ]
  },
  resolve
};