

#### 创建工程
```
git int
```

#### 创建包咯
```
npm int
```


#### 组件编译
通过使用vue-loader对.vue单文件组件文件进行加载。
```
//安装类库
npm i vue-loader@14.2.2 css-loader@0.28.11 vue-template-compiler@2.5.16 --save-dev
//配置文件
module.exports = {
  module: {
     rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
};
```

#### 开发部署
以`src`目录下的`main.js`作为脚本入口文件，
以`dist`目录下的`bundle.js`作为脚本出口文件，
```
const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development'
}
```

#### 运行依赖
此处使用2.5.16版本作为运行时的依赖。
```
npm i vue@2.5.16 --save
```

#### 建服务器
此处使用webpack-dev-server，建立简单的服务器。通过命令传入参数的形式，设置静态资源目录为`demo`，启用自动刷新功能，端口为`8082`，开发时使用`webpack.dev.config.js`作为webpack的配置文件。
```
//安装类库
npm i webpack@4.0.5 webpack-cli@2.0.14 webpack-dev-server@3.1.3 --save-dev
//添加配置

//快捷启动
"dev": "webpack-dev-server --content-base demo --hot --port 8082 --config webpack.dev.config.js",
//启动试试
npm run dev
```

#### 打包忽略
production时对vue类库进行打包忽略，在产品中通过自行引入相关的vuejs版本依赖。development时不对ue类库进行打包忽略。下面是production时的配置，development时去掉
```
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	}
```
#### 优化压缩
production时对`bundle.js`文件进行压缩，另外生成一个`bundle.js.gz`的压缩文件。
```
//安装类库
npm i -D compression-webpack-plugin@1.1.11 uglifyjs-webpack-plugin@1.2.5
//添加配置
	plugins: [
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
```

#### 参考文献
[详解webpack-dev-server的使用](https://segmentfault.com/a/1190000006964335)
