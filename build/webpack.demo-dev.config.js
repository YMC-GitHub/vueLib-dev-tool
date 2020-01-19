const path = require('path');

const dirConfig = require('../config/dir.construtor');
const externals = require('./webpack.externals.config');
const resolve = require('./webpack.resolve.config');
const vueLoaderOptions = require('./vue-loader.config');

module.exports = {
  entry: path.resolve(dirConfig.demo, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(dirConfig.demo, 'dist')
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