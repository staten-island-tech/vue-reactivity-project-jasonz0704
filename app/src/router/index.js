import { createRouter, createWebHistory } from 'vue-router'
import Halal from '@/views/Halal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Halal,
    },
  ],
})

export default router
