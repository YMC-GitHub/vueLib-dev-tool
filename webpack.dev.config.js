const path = require('path');

module.exports = {
	entry: './demo/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './demo')
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.vue$/,
			use: ['vue-loader']
		}]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}/*,
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	}*/
};