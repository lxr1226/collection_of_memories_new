import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/login/LoginPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/LoginPage.vue')
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mains/MainPage.vue')
    }
  ]
})

export default router
