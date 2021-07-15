import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '登录', isLoginPage: true }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
