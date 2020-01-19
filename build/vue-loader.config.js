//-----------build----------
//it is a vue-loader config file for webpack config
//-----------build----------
//tasks:
//01.use project env from config dir
//02.check NODE_ENV
//03.use source map for build or dev with config
//04.extract css when pro
//...

'use strict'
//include some lib
/*
const utils = require('./utils')
//include some data
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
module.exports = {
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
}*/

module.exports = {
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
