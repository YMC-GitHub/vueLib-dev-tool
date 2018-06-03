import Vue from 'vue'
import App from './app.vue'
import VueButton from '../src/components/Button.vue'

Vue.component('v-button', VueButton)
new Vue({
   el:'#app',
   components:{
    app:App
   }
})