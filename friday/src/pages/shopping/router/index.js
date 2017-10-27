import Vue from 'vue'
import Router from 'vue-router'
import Shopcon from "../../.././components/shopCon"
import Ksuccess from "../../.././components/k_success"
Vue.use(Router)

export default new Router({
	 mode: 'history',
routes: [
    {
      path: '/shopping.html',
      name: 'shopCon',
      component: Shopcon,
    },
    
]
})
