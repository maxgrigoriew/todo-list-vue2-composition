import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoPage from './pages/TodoPage.vue'
import HomePage from './pages/HomePage.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: HomePage,
		meta: {
			layout: 'MainLayout'
		}
	},
	{
		path: '/todos',
		component: TodoPage,
		meta: {
			layout: 'MainLayout'
		}
	},
	{
		path: '*',
		component: NotFound,
		meta: {
			layout: 'EmptyLayout'
		}
	}
]

export const router = new VueRouter({
	routes,
	mode: 'history'
})
