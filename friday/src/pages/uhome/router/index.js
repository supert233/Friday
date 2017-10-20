import Vue from 'vue'
import Router from 'vue-router'
import Users from '../../.././components/s_users'

Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
