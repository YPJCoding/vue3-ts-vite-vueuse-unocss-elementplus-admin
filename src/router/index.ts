import Layout from '@/layout/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
      meta: { title: '登录' },
    },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      meta: { title: '首页' },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
          meta: { title: '首页' },
        },
      ],
    },
    {
      path: '/:path(.*)',
      name: '404',
      component: () => import('@/views/404/index.vue'),
      meta: { title: '404' },
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
