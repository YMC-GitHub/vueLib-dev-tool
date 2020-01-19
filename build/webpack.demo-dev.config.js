//include some lib
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

//include some data
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      //use the index.html file in project dir as his template
      template: path.resolve(dirConfig.demo, 'src/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new HtmlWebpackPlugin({
      filename: 'index02.html',
      //use the index.html file in project dir as his template
      template: path.resolve(dirConfig.demo, 'src/index02.html'),
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  ],
  resolve
};