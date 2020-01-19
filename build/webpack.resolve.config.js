const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const resolve = file => path.resolve(rootPath, file)
module.exports = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
  }
}