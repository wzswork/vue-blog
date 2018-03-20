// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueBus from 'vue-bus'

import './public/css/reset.css'
import './public/css/style.css'

if(process.env.NODE_ENV == 'production'){
  axios.defaults.baseURL = 'https://119.23.202.132:7000'
}


Vue.prototype.axios = axios
Vue.use(VueBus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
