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

\# use as a global component [demo here](./demo/dist/index.html)

01.install him `npm install  xxx`

02.use as a global component [demo source](./demo/src/main.js#L1-#L3)

```js
/*way:02 use as a global component*/
import Vue from 'vue'
import VueButton from 'xxx'
Vue.component('v-button', VueButton)
```

03.use his tag in template tag [demo source](./demo/src/app.vue#L5-#L9)

```vue
<template>
  <!-- ... -->
    <v-button></v-button>
  <!-- ... -->
</template>
```


\# use as a local component
```vue
<!--way:00 use as a local component-->
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

\# use as a global component with some arg


```js
/*way:02 use as a global component with some arg*/
import Vue from 'vue'
import PxButton from 'xxx'
Vue.use(PxButton, {});
```

\# use with an outreach style by link [demo here](./demo/dist/index.html)

01.include css with html link tag [demo source](./demo/dist/index02.html#L8-#L8)

```html
<head>
   <!-- ... -->
  <!-- use with an outreach style by link -->
  <link type="text/css" rel="styleSheet" href="../../dist/button.css" />
   <!-- ... -->
</head>
```

02.wirte html with some css style  [demo source](./demo/dist/index02.html#L12-#L14)

```html
<body>
   <!-- ... -->
  <div class="smUI-3d-btn smUI__unselect smUI-3d-btn__aquamarine">
    hello
  </div>
   <!-- ... -->
</body>
```

## author

yemiancheng <ymc.github@gmail.com>

## license

MIT