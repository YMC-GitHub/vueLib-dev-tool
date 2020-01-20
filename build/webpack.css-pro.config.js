const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

//include some data
const dirConfig = require('../config/dir.construtor');
const externals = require('./webpack.externals.config');
const resolve = require('./webpack.resolve.config');
const vueLoaderOptions = require('./vue-loader.config');

module.exports = {
  //模块入口
  entry: {
    css: path.resolve(dirConfig.src, 'components/button.onlycss.js'),
  },
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
        test: /\.less$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
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
  //使用插件
  plugins: [
    // 环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // 文件压缩 对js和css文件进行gzip压缩
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // 文件精简-对提取的css进行精简
    new MiniCssExtractPlugin({
      filename: 'button.css',
      chunkFilename: '[id].css',
    })],
  //优化压缩
  optimization: {
    minimizer: [
      //文件压缩 minify js
      new uglifyjsPlugin({
        uglifyOptions: {
          parallel: true,
          sourceMap: true,
        }
      }),
      //文件压缩 minify css
      //new OptimizeCSSAssetsPlugin({})
    ]
  },
  mode: 'production',
};