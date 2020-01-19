const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")
const path = require('path');

const dirConfig = require('../config/dir.construtor');
const externals = require('./webpack.externals.config');
const resolve = require('./webpack.resolve.config');
const vueLoaderOptions = require('./vue-loader.config');

module.exports = {
  //模块入口
  entry: path.resolve(dirConfig.src, 'index.js'),
  //模块出口
  output: {
    filename: 'bundle.js',
    path: dirConfig.dist,
    library: 'Vbutton',
    libraryTarget: 'umd'
  },
  //外部拓展
  externals,
  //模块匹配
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderOptions
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/,
      }
    ]
  },
  //模块查找
  resolve,
  plugins: [
    // 环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // gzip压缩
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  //优化压缩
  optimization: {
    minimizer: [
      new uglifyjsPlugin({
        uglifyOptions: {
          parallel: true,
          sourceMap: true,
        }
      })
    ]
  },
  mode: 'production',
};