import Vue from 'vue'
import Router from 'vue-router'
import Users from '../../.././components/s_users'
import S_myorder from '../../.././components/S_myorder'
import Uhomes from '../../.././components/Uhomes'
import S_myjifen from '../../.././components/S_myjifen'
import S_jifenorder from '../../.././components/S_jifenorder'
import S_mywallet from '../../.././components/S_mywallet'
import S_perMas from '../../.././components/S_perMas'
import S_changePhone from '../../.././components/S_changePhone'
import S_addressContr from '../../.././components/S_addressContr'
import S_upaddress from '../../.././components/S_upaddress'
import S_mycollection from '../../.././components/S_mycollection'
import S_latewatch from '../../.././components/S_latewatch'
import S_massage from '../../.././components/S_massage'
import S_massageReturn from '../../.././components/S_massageReturn'
import S_changePassword from '../../.././components/S_changePassword'
import S_rechargeCard from '../../.././components/S_rechargeCard'
import S_orderDetail from '../../.././components/S_orderDetail'
import S_jifenDetail from '../../.././components/S_jifenDetail'
import S_orderEvaluation from '../../.././components/S_orderEvaluation'


import IndexCon from '../../.././components/indexCon'
import Kinte from '../../.././components/k_inte'
import Local from "../../.././components/local"
import Five from "../../.././components/five"
import Protect from "../../.././components/protect"



Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [{
      path: '/index.html',
      name: 'vall',
      component: IndexCon
    },
    {
      path: '/',
      name: 'vall',
      component: IndexCon
    },
    {
    	path:'/kinte',
    	name:'k_inte',
    	component: Kinte
    },
    {
    	path:'/local',
    	name:'local',
    	component: Local
    },
    {
    	path:'/five',
    	name:'five',
    	component: Five
    },
    {
    	path:'/protect',
    	name:'protect',
    	component: Protect
    },
  
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
	     {
	      path: '/s_changePhone',
	      name: 's_changePhone',
	      component: S_changePhone,
	      children:[]
	    },
	     {
	      path: '/s_addressContr',
	      name: 's_addressContr',
	      component: S_addressContr,
	      children:[]
	    },
	     {
	      path: '/s_upaddress',
	      name: 's_upaddress',
	      component: S_upaddress,
	      children:[]
	    },
	     {
	      path: '/s_mycollection',
	      name: 's_mycollection',
	      component: S_mycollection,
	      children:[]
	    },
	      {
	      path: '/s_latewatch',
	      name: 's_latewatch',
	      component: S_latewatch,
	      children:[]
	    },
	     {
	      path: '/s_massage',
	      name: 's_massage',
	      component: S_massage,
	      children:[]
	    },
	     {
	      path: '/s_massageReturn',
	      name: 's_massageReturn',
	      component: S_massageReturn,
	      children:[]
	    },
	     {
	      path: '/s_changePassword',
	      name: 's_changePassword',
	      component: S_changePassword,
	      children:[]
	    },
	      {
	      path: '/s_rechargeCard',
	      name: 's_rechargeCard',
	      component: S_rechargeCard,
	      children:[]
	    },
	    {
	      path: '/s_orderDetail',
	      name: 's_orderDetail',
	      component: S_orderDetail,
	      children:[]
	    },
	     {
	      path: '/s_jifenDetail',
	      name: 's_jifenDetail',
	      component: S_jifenDetail,
	      children:[]
	    },
	    {
	      path: '/s_orderEvaluation',
	      name: 's_orderEvaluation',
	      component: S_orderEvaluation,
	      children:[]
	    },
      
      ]
    },

  ]
})
