import Vue from 'vue'
import Router from 'vue-router'
import Uhomes from '../../.././components/Uhomes'
import Shopcon from "../../.././components/shopCon"
import Ksuccess from "../../.././components/k_success"
import S_myorder from '../../.././components/S_myorder'
Vue.use(Router)

export default new Router({
	 mode: 'history',
routes: [
    {
      path: '/shopping.html',
      name: 'shopCon',
      component: Shopcon,
      children:[]
      
    },
     {
	  path: '/uhomes',
      name: 'uhomes',
      component: Uhomes,
	  children:[
	  	  {
	      path: '/s_myorder',
	      name: 's_myorder',
	      component: S_myorder,
	      children:[]
	    },
	  ]
	 },
    
]
})
