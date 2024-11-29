
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import FlashSaleStaggered from '@/components/FlashSaleStaggered.vue';
import {createRouter, createWebHistory} from 'vue-router';
import staggeredView from "../views/staggeredView.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
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
      path: '/staggered',
      name: 'flash staggered',
      component: staggeredView,
    },
	],
});

export default router;
