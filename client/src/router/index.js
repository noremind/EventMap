import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/MainPage.vue')
		},
		{
			path: '/greeting',
			name: 'greeting',
			component: () => import('@/views/GratingPage.vue')
		}
	]
})

export default router
