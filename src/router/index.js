import percentageOff from '@/views/percentageOffView.vue';
import AboutPage from '@/views/AboutPageView.vue';
import StaggeredView from '../views/staggeredView.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/percentage-off',
			name: 'Percentage Off',
			component: percentageOff,
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