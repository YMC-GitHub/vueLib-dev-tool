# 建设笔记


## 创建工程
```
git int
```

## 创建包咯
```
npm int
```


## 组件编译
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

## 开发部署
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

## 运行依赖
```
npm i vue@2.5.16 --save
```

## 建服务器
```
//安装类库
npm i webpack@4.0.5 webpack-cli@2.0.14 webpack-dev-server@3.1.3 --save-dev
//添加配置

//快捷启动
"dev": "webpack-dev-server --hot --port 8082"
//启动试试
npm run dev
```

## 打包忽略
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
## 优化压缩
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

## 参考文献
[详解webpack-dev-server的使用](https://segmentfault.com/a/1190000006964335)
