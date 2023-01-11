import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/users',
			component: Users
		},
		
	],
})

export default router