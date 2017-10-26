// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Test from "../.././components/s_users"
import Distpicker from 'v-distpicker'
import Vuex from 'vuex'
import store from '../.././vuex/store'

Vue.component('v-distpicker', Distpicker)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
