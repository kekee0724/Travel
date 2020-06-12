import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@pages/home/Home'
import List from '@pages/list/List'
import City from '@pages/city/City'
import Detail from '@pages/detail/Detail'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}, {
		path: '/list',
		name: 'List',
		component: List
	}, {
    path: '/city',
    name: 'City',
    component: City
	}, {
		path: '/detail/:id',
		name: 'Detail',
		component: Detail
	}
]

const router = new VueRouter({
	routes,
	// eslint-disable-next-line no-unused-vars
	scrollBehavior (to, from, savedPosition) {
		// 滚动行为
		return { x: 0, y: 0 }
	}
})

export default router

