# 如何搭建？

#### 组件编译

`安装类库`
```sh
npm i vue-loader@14.2.2 css-loader@0.28.11 vue-template-compiler@2.5.16 --save-dev
```

`设置配置`

01.通过使用vue-loader对.vue单文件组件文件进行加载。

02.对.vue文件中style标签内的css先用css-loader再用vue-style-loader加载；

03.对.vue文件中style标签内的less用less-loader和postcss-loader加载以及用相应的处理器处理后，再将它视为css处理。


#### 开发部署

`研发时`
01.研发时，脚本入口文件 [config](webpack.dev.config.js#L51-#L51)。

02.研发时，脚本输出文件 [config](webpack.dev.config.js#L52-#L54)。

`生产时`
01.生产时，脚本入口文件 [config](webpack.pro.config.js#L63-#L63)。

02.生产时，脚本输出文件 [config](webpack.pro.config.js#L65-#L71)。


#### 类库规范

`生产时`
01.设置类库规范为`umd` [config](webpack.pro.config.js#L70-#L70)。

02.amd/umd规范时，类库的amd/umd全局变量名 [config](webpack.pro.config.js#L69-#L69)。


#### 打包忽略

`生产时`

01.对vue类库进行打包忽略，在产品中通过自行引入相关的vuejs版本依赖  [config](webpack.pro.config.js#L6-#L13)。


#### 源码追踪

`研发时`

01.设置webpack的devtool为`eval-source-map`，以便追踪错误 [config](webpack.pro.config.js#L56)。


#### 环境标识

`研发时`

01.设置webpack的mode为`development`，启用一些webpack的内部配置。

`生产时`

01.设置webpack的mode为`production`，启用一些webpack的内部配置[config](webpack.pro.config.js#L119)。

#### 别名系统

通过import引入vue组件时，引用`node_modulevue/dist/`目录下的`vue.js` [config](webpack.pro.config.js#L15-#L17)。

一是实现简写，二是防止webpack对vue的再次编译。这是一处拦截，还可通过其他设置进行拦截。


#### 建服务器

`安装类库`
```sh
npm i webpack@4.0.5 webpack-cli@2.0.14 --save-dev
npm i webpack-dev-server@3.1.3 --save-dev
```

`设置配置`

01.此处使用webpack-dev-server，建立简单的服务器。通过命令传入参数的形式，设置静态资源目录为`demo`，启用自动刷新功能，端口为`8082`，开发时使用`webpack.dev.config.js`作为webpack的配置文件。[config](package.json#L13)。


#### 优化压缩


`安装类库`
```sh
npm i compression-webpack-plugin@1.1.11 --save-dev
npm i uglifyjs-webpack-plugin@1.2.5 --save-dev
```

`设置配置`

01.生产时，对`bundle.js`文件进行压缩 [config](webpack.pro.config.js#L111-#L)。另外生成一个`bundle.js.gz`的压缩文件[config](webpack.pro.config.js#L99-#L106)。。


#### 参考文献

[详解webpack-dev-server的使用](https://segmentfault.com/a/1190000006964335)
