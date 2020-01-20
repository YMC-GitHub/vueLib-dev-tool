# some command
```sh
#下拉代码
#默认分支：
git clone git@github.com:YMC-GitHub/vueLib-dev-tool.git
#指定分支：
git clone -b dev git@github.com:YMC-GitHub/vueLib-dev-tool.git
#指定标签：
git clone -b v1.0.0 git@github.com:YMC-GitHub/vueLib-dev-tool.git
#...

#研发
npm run dev

#生产
npm run build
#
#gen css and js and combine into one file
npm run build:sfc
#npm run build:sfc:one
#npm run build:sfc:one:min
#gen css and js but spilt into two file(only for css)
#npm run build:sfc:css
#gen css and js but spilt into two file
#npm run build:sfc:two
#npm run build:sfc:two:min


#测试
#npm run test
#
```