import { createRouter, createWebHistory } from 'vue-router'
import Taco from '@/views/Taco.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Taco,
    },
  ],
})

export default router
