import PercentageOff from '@/views/percentageOffView.vue';
import Home from '@/views/HomePageView.vue';
import StaggeredView from '@/views/StaggeredView.vue';
import {createRouter, createWebHistory} from 'vue-router';
import BrandCarousel from '@/components/BrandCarousel.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/percentage-off',
			name: 'Percentage Off',
			component: PercentageOff,
		},
		
		{
			path: '/staggered',
			name: 'Staggered',
			component: StaggeredView,
		},
		{
			path: '/brand-carousel',
			name: 'Brand Carousel',
			component: BrandCarousel,
		},
		{ 
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: NotFound 
		},
	],
});

export default router;
