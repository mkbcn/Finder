// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/videos',
        name: 'Videos',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '@/views/News.vue'),
      },
      {
        path: '/numbers',
        name: 'Numbers',
        component: () => import(/* webpackChunkName: "Numbers" */ '@/views/Numbers.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
