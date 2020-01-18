import Vue from 'vue'
import VueButton from '../../src/components/Button.vue'
Vue.component('v-button', VueButton)

import App from './app.vue'
new Vue({
  el: '#app',
  components: {
    app: App
  }
})