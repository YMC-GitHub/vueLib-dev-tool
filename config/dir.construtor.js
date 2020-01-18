//----------config dir----------
//it is a config for project dir contrutor
//----------config dir----------
'use strict'
const path = require('path')
const rootPath = path.resolve(__dirname, '..')
const resolve = file => path.resolve(rootPath, file)
module.exports = {
  //save the source code (for dev)
  src: resolve('src'),
  //save the test source code (for test)
  test: resolve('test'),
  //save the build ouput code by webpack
  dist: resolve('dist'),
  //static resource file that will be copyed by webpack
  static: resolve('static'),
  //static resource file that will be serve by server
  public: resolve('public'),
  //save the demo code (for demo)
  demo: resolve('demo'),
}
