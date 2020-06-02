import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'   
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
// import FastClick from 'fastclick'
// FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App),
  // mounted(){
  //   FastClick.attach(document.body); // 加载完毕调用
  // }
}).$mount('#app')