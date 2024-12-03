import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/', // Change base to '/' for root path
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src', // Simplified alias path
		},
	},
});
