const path = require('path');

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
  entry: './demo/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './demo')
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