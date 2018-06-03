const path = require('path');
const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
	//模块入口
	entry: './src/index.js',
	//模块出口
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		//publicPath:"./",
		library: 'Vbutton',
		libraryTarget: 'umd'
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	},
	//模块匹配
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
		]
	},
	//模块查找
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	plugins: [
		// 环境
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		/*
		 * only use for< 4.x
		// 压缩
		new webpack.optimize.UglifyJsPlugin({
			parallel: true,
			sourceMap: true,
		}),
		*/
		// gzip压缩
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css)$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
	optimization: {
		minimizer: [
			new uglifyjsPlugin({
				uglifyOptions: {
					parallel: true,
					sourceMap: true,
				}
			})
		]
	}
};