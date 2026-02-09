import { createRouter, createWebHistory } from 'vue-router'
import PixelArt from '@/views/PixelArt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PixelArt,
    },
  ],
})

export default router
