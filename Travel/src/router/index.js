import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/home/Home'
import About from '@pages/home/About'
import List from '@pages/list/List'
import City from '@pages/city/City'
import Detail from '@pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import('@pages/home/Home')
  }, {
    path: '/about',
    name: 'About',
    component: About
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
  }],
  scrollBehavior (to, from, savedPosition) {
    // 滚动行为
    return { x: 0, y: 0 }
  }
})
