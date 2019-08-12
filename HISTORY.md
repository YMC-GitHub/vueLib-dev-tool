

#### 创建工程
```
git int
```

#### 创建包咯
```
npm int
```


#### 组件编译
通过使用vue-loader对.vue单文件组件文件进行加载。对.vue文件中style标签内的css先用css-loader再用vue-style-loader加载；对.vue文件中style标签内的less用less-loader和postcss-loader加载以及用相应的处理器处理后，再将它视为css处理。
```
//安装类库
npm i vue-loader@14.2.2 css-loader@0.28.11 vue-template-compiler@2.5.16 --save-dev
//配置文件
{
test: /\.vue$/,
loader: 'vue-loader',
options: vueLoaderOptions//在webpack.pro.config.js或webpack.dev.config.js中查看详情
},
```

#### 开发部署
development时以`demo`目录下的`main.js`作为脚本入口文件，以`dist`目录下的`bundle.js`作为脚本出口文件。
production时以`src`目录下的`index.js`作为脚本入口文件，以`dist`目录下的`bundle.js`作为脚本出口文件。
```
const path = require('path');
module.exports = {
  entry: './demo/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
```

#### 类库规范

production时设置类库规范为`umd`，类库的amd全局变量名为`Vbutton`。
```
	output: {
		//...
		library: 'Vbutton',
		libraryTarget: 'umd'
	},
```
在示例中通过如下方式进行引用类库
```
//demo/src/main.js
import Vue from 'vue'
import smUI from '../src/index.js'
Vue.use(smUI, {});
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

#### 源码追踪

development时设置webpack的devtool为`eval-source-map`，以便追踪错误


#### 环境标识

development时设置webpack的mode为`development`，启用一些webpack的内部配置。
production时设置webpack的mode为`production`，启用一些webpack的内部配置。

#### 别名系统

通过import引入vue组件时，引用`node_modulevue/dist/`目录下的`vue.js`。一是实现简写，二是防止webpack对vue的再次编译，这是一处拦截，还可通过其他设置进行拦截。
```
const resolve = {
	alias: {
		'vue': 'vue/dist/vue.js'
	}
};
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
