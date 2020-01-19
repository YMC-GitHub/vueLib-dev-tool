const path = require('path');
const dirConfig = require('../config/dir.construtor');
const resolve = {
  alias: {
    'vue': 'vue/dist/vue.js'
  }
};
const vueLoaderOptions = {
  loaders: {
    css: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }
    ],
    less: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'less-loader',
        options: {
          strictMath: true,
          strictUnits: true,
          ieCompat: true,
          sourceMap: true
        }
      }
    ],
  },
  postLoaders: {
    html: 'babel-loader?sourceMap'
  },
  sourceMap: true,
}

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