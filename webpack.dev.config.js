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
				loader: 'vue-loader',
				options: {
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
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					sourceMap: true,
				},
				exclude: /node_modules/,
			}
			/*,
						{
							test: /\.css$/,
							loaders: [{
									loader: 'style-loader',
									options: {
										sourceMap: true,
									},
								},
								{
									loader: 'css-loader',
									options: {
										sourceMap: true,
									},
								},
								{
									loader: 'postcss-loader',
								},
							]
						},
						{
							test: /\.less$/,
							loaders: [{
									loader: 'style-loader',
									options: {
										sourceMap: true,
									},
								},
								{
									loader: 'css-loader',
									options: {
										sourceMap: true,
									},
								},
								{
									loader: 'postcss-loader',
								},
								{
									loader: 'less-loader',
									options: {
										sourceMap: true,
									},
								},
							]
						}
						*/
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
	/*,
		externals: {
			vue: {
				root: 'Vue',
				commonjs: 'vue',
				commonjs2: 'vue',
				amd: 'vue'
			}
		}*/
};