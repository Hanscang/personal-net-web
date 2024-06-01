import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import NetHome from '@/views/NetHome.vue'
import _Test from '@/MyTest.vue'
import BiographicalNote from '@/BiographicalNote.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: 'biographic-note'
    },
    {
      path: '/biographic-note/:id',
      name: '简历',
      component: BiographicalNote
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
