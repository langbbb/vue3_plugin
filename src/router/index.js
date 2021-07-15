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

  {
    path: '/npmShowmore',
    component: () => import('@/views/npmPlugin/NpmShowmore.vue'),
    meta: { title: 'npmShowmore', isLoginPage: true }
  },
  {
    path: '/myShowmore',
    component: () => import('@/views/myPlugin/MyShowmore.vue'),
    meta: { title: 'myShowmore', isLoginPage: true }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
