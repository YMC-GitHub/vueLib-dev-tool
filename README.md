# vue-lib-dev-with-webpack

## desc

vue lib develop with webpack

## quick start

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
```

## get more

### how to use with developer?

### how to use with producton?

get demo [here](https://ymc-github.github.io/vueLib-dev-tool/demo/dist/index.html)

01.install him `npm install  xxx`

02.use him [demo](./demo/src/main.js#L1-#L3) :
```vue
<!--way:00 use as a locaol component-->
<template>
  <!-- ... -->
    <px-button></px-button>
  <!-- ... -->
</template>
<script>
import PxButton from 'xxx'
export default {
  /* ... */
  components: {
    PxButton
  }
}
</script>
```

```js
/*way:01 use as a global component*/
import Vue from 'vue'
import PxButton from 'xxx'
Vue.component('px-button', PxButton)


/*way:02 use as a global component with some arg*/
import Vue from 'vue'
import PxButton from 'xxx'
Vue.use(PxButton, {});
```

## author

yemiancheng <ymc.github@gmail.com>

## licence

MIT