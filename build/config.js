const path = require('path');
const webpack = require('webpack');

const version = process.env.VERSION || require('../package.json').version;

const rootPath = path.resolve(__dirname, '..');
const resolve = _path => path.resolve(rootPath, _path);

/**
 * 输入输出配置
 */
const configs = {
  umdDev: {
    /**
     * @prop input 输入文件
     */
    input: resolve('src/index.js'),
    /**
     * @prop file 输出文件
     */
    file: resolve('dist/button.js'),
    /**
     * @prop format 类库规范
     */
    format: 'umd',
    /**
     * @prop env 当前环境
     */
    env: 'development'
  },
  umdProd: {
    input: resolve('src/index.js'),
    file: resolve('dist/button.min.js'),
    format: 'umd',
    env: 'production'
  },
  commonjs: {
    input: resolve('src/index.js'),
    file: resolve('dist/button.common.js'),
    format: 'cjs'
  },
  esm: {
    input: resolve('src/index.esm.js'),
    file: resolve('dist/button.esm.js'),
    format: 'es'
  }
};

/**
 * 生成webpack配置
 * @param {*} opts 配置
 * @returns {*} config
 */
function genConfig(opts) {
  const config = {
    entry: opts.input
    output: {
      filename: 'opts.file,
      path: resolve('dist'),
      library: 'button',
      libraryTarget: opts.format
    }
  };

  if (opts.env) {
    config.plugins = config.plugins || []
    config.plugins.unshift(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(opts.env)
      })
    );
  }

  return config;
}

/**
 * 遍历执函
 * @param {*} obj 对象
 * @param {*} fn 函数
 * @returns {Object} 对象
 * @description
 * 遍历对象键值，执行某一函数，返回一个对象，它带有键和值，值为函数结果
 */
function mapValues(obj, fn) {
  const res = {};
  Object.keys(obj).forEach(key => {
    res[key] = fn(obj[key], key);
  });
  return res;
}

module.exports = mapValues(configs, genConfig);