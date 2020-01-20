'use strict'
//include some lib
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//include some data
const config = require('../config')

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
const isProd = process.env.NODE_ENV === 'production'

//export isPro to check process.env.NODE_ENV
exports.isPro = function () {
  return process.env.NODE_ENV === 'production' ? true : false
}
//export isDev to check process.env.NODE_ENV
exports.isDev = function () {
  return process.env.NODE_ENV === 'development' ? true : false
}
//export isTes to check process.env.NODE_ENV
exports.isTes = function () {
  return process.env.NODE_ENV === 'testing' ? true : false
}

//export assetsPath to get assert path from project env
exports.assetsPath = function (_path) {
  const assetsSubDirectory = exports.isPro()
    ? config.build.assetsSubDirectory.to
    : config.dev.assetsSubDirectory.to

  return path.posix.join(assetsSubDirectory, _path)
}

//export cssLoaders to get css/less/sass/scss/stylus/styl/postcss loader
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  //use options to get css loader
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}