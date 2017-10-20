import Vue from 'vue'
import Router from 'vue-router'
import Users from '../../.././components/s_users'
import S_myorder from '../../.././components/S_myorder'
import Uhomes from '../../.././components/Uhomes'
import S_myjifen from '../../.././components/S_myjifen'
import S_jifenorder from '../../.././components/S_jifenorder'
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
      
      ]
    },

  ]
})
