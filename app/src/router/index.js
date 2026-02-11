import { createRouter, createWebHistory } from 'vue-router'
import TacoCard from '@/components/TacoCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TacoCard,
    },
  ],
})

export default router
