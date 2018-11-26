import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/view/Login').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/index',
      name: 'index',
      component: require('@/view/Index').default,
      children:[
        {
          path:'/docs',
          name: 'docs',
          component: require('@/view/Docs').default
        }
      ]
    }
  ]
})
