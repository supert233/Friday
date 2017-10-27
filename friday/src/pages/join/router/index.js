import Vue from 'vue'
import Router from 'vue-router'
import Register from "../../.././components/register"

Vue.use(Router)

export default new Router({
	 mode: 'history',
routes: [
    {
      path: '/join.html',
      name: 'register',
      component: Register,
    },
    
]
})
