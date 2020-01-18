const path = require('path');
const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

const externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};
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
  //模块入口
  entry: path.resolve(__dirname, '../src/index.js'),
  //模块出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    //publicPath:"./",
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
    // 环境
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