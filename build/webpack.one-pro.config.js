const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

//include some data
const dirConfig = require('../config/dir.construtor');
const externals = require('./webpack.externals.config');
const resolve = require('./webpack.resolve.config');
const utils = require('./utils')
const config = require('../config')

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
//check NODE_ENV
const isPro = utils.isPro()
//use source map when pro
const sourceMapEnabled = isPro
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const vueLoaderOptions = {
  //set css loader in .vue file
  //for css/less/sass/scss/stylus/styl/postcss
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    //extract css when pro
    extract: isPro
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postLoaders: {
    html: 'babel-loader?sourceMap'
  }
}
module.exports = {
  //模块入口
  entry: {
    //css: path.resolve(dirConfig.src, 'components/button.onlycss.js'),
    sfc: path.resolve(dirConfig.src, 'index.js')
  },
  //模块出口
  output: {
    filename: 'bundle.min.js',
    path: dirConfig.dist,
    library: 'Vbutton',
    libraryTarget: 'umd'
  },
  //外部拓展
  externals,
  //模块匹配
  module: {
    rules: [
      ...utils.styleLoaders({
        sourceMap: config.build.productionSourceMap,
        extract: true,
        usePostCSS: true
      }),
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
      filename: 'button.min.css',
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
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      //extracting all less into a single file
      /*
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.less$/,
          chunks: 'all',
          enforce: true,
        },
      },
      */
      //extracting all less into a single file based on entry
      /*
      cacheGroups: {
        cssStyles: {
          name: 'css',
          test: (m, c, entry = 'sfc') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      }
      */
    },
  },
  mode: 'production',
};