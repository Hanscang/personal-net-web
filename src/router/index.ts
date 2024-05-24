import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import _Test from '@/_Test.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'NetHome',
      redirect: ''
    },
    {
      path: '/test',
      name: 'test',
      component: _Test
    },

    {
      path: '/app',
      name: 'app',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
