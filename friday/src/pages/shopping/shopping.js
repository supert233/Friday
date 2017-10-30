// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Shop from './Shop'
import router from './router'

import Distpicker from 'v-distpicker'
import Vuex from 'vuex'
import store from '../.././vuex/store'
import  VueResource  from 'vue-resource'

Vue.use(VueResource) 
Vue.component('v-distpicker', Distpicker)
Vue.use(Vuex)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Shop/>',
  components: { Shop }
})
