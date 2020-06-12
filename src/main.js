import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'   
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
// import FastClick from 'fastclick'
// FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
  // mounted(){
  //   FastClick.attach(document.body); // 加载完毕调用
  // }
}).$mount('#app')