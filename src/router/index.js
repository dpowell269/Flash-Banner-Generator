import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import FlashSaleStaggered from '@/components/FlashSaleStaggered.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/about',
    name: 'About-2',
    component: AboutPage,
  },
  {
    path: '/staggered',
    name: 'flash staggered',
    component: FlashSaleStaggered,
  },
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
