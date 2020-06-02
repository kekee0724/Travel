import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import About from '@/pages/home/About'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/list',
    name: 'List',
    component: List
  }]
})
