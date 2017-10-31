import Vue from 'vue'
import Router from 'vue-router'
import Uhomes from '../../.././components/Uhomes'
import Shopcon from "../../.././components/shopCon"
import Ksuccess from "../../.././components/k_success"
import S_myorder from '../../.././components/S_myorder'



import Z_confirmOrder from '../../.././components/z_confirmOrder'
import Z_payMethod from "../../.././components/z_payMethod"
import Zdetail from "../../.././components/z_detail"


Vue.use(Router)

export default new Router({
	 mode: 'history',
routes: [
    {
      path: '/shopping.html',
      name: 'shopCon',
      component: Shopcon,
      children:[
       ] 
    },
    {
        	path:'/Z_confirmOrder',
     	name: 'Z_confirmOrder',
      	component:Z_confirmOrder
     },
      {
	    	path:'/Zdetail',
	    	name:'z_detail',
	    	component: Zdetail
    },

    

      {
        	path:'/Z_payMethod',
     	name: 'Z_payMethod',
      	component:Z_payMethod
     }, 
     {
        	path:'/Ksuccess',
     	name: 'Ksuccess',
      	component:Ksuccess
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
