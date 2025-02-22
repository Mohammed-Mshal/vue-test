import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FAQ from '@/views/FAQ.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      
      component: HomeView,
    },
    {
      path: '/faq',
      name: 'faq',
      
      component: FAQ,
    },
  ],
})

export default router
