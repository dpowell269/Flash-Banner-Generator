import percentageOff from '@/views/percentageOffView.vue';
import AboutPage from '@/views/AboutPageView.vue';
import StaggeredView from '../views/staggeredView.vue';
import {createRouter, createWebHistory} from 'vue-router';
import CarouselBanner from '@/components/CarouselBanner.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/percentage-off',
			name: 'Percentage Off',
			component: percentageOff,
		},
		{
			path: '/',
			name: 'About',
			component: AboutPage,
		},
		{
			path: '/staggered',
			name: 'Staggered',
			component: StaggeredView,
		},
		{
			path: '/carousel-banner',
			name: 'Carousel Banner',
			component: CarouselBanner,
		},
	],
});

export default router;