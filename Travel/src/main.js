// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'
// import style
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
// import FastClick from 'fastclick'
// FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
  // mounted(){
  //   FastClick.attach(document.body); // 加载完毕调用
  // }
})
