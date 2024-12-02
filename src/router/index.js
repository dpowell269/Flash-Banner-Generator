import HomePage from '@/views/HomePageView.vue';
import AboutPage from '@/views/AboutPageView.vue';
import StaggeredView from '../views/staggeredView.vue';
import {createRouter, createWebHistory} from 'vue-router';

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
			name: 'Staggered',
			component: StaggeredView,
		},
	],
});

export default router;
