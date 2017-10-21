import Vue from 'vue'
import Router from 'vue-router'
import Users from '../../.././components/s_users'
import S_myorder from '../../.././components/S_myorder'
import Uhomes from '../../.././components/Uhomes'
import S_myjifen from '../../.././components/S_myjifen'
import S_jifenorder from '../../.././components/S_jifenorder'
import S_mywallet from '../../.././components/S_mywallet'
import S_perMas from '../../.././components/S_perMas'
Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
   {
      path: '/uhomes',
      name: 'uhomes',
      component: Uhomes,
      //二级路由
      children:[
       {
	      path: '/users',
	      name: 'users',
	      component: Users
	    },
	    {
	      path: '/s_myorder',
	      name: 's_myorder',
	      component: S_myorder,
	      children:[]
	    },
	     {
	      path: '/s_myjifen',
	      name: 's_myjifen',
	      component: S_myjifen,
	      children:[]
	    },
	     {
	      path: '/s_jifenorder',
	      name: 's_jifenorder',
	      component: S_jifenorder,
	      children:[]
	    },
	     {
	      path: '/s_mywallet',
	      name: 's_mywallet',
	      component: S_mywallet,
	      children:[]
	    },
	     {
	      path: '/s_perMas',
	      name: 's_perMas',
	      component: S_perMas,
	      children:[]
	    },
      
      ]
    },

  ]
})
