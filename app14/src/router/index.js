import { createRouter, createWebHistory } from 'vue-router'
import AView from '@/views/AView.vue'
import BView from '@/views/BView.vue'
import CView from '@/views/CView.vue'
import DView from '@/views/DView.vue'
import EView from '@/views/EView.vue'
import FView from '@/views/FView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        aView: AView,
        bView: BView,
        cView: CView,
        dView: DView,
        eView: EView,
        fView: FView
      }
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
