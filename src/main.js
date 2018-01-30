// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import eventhub from './eventhub'
import FastClick from 'fastclick'
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'
import VueSwiper from 'vue-awesome-swiper'
import ChartJS from 'chart.js'
import VueCharts from 'hchs-vue-charts'
import axios from 'axios'



Vue.use(Vuex)//通过全局方法 Vue.use() 使用插件,也叫调用；
Vue.use(VueSwiper)
Vue.use(window.VueCharts)//hchs-vue-charts从node_modules全局导入Chart.js库和包装器并将其注册Vue.use(window.VueCharts)。
Vue.prototype.$http = axios
FastClick.attach(document.body)//点击没有300的延迟
Vue.prototype.$eventhub = eventhub//vue实例的引用
Vue.config.productionTip = false

/* eslint-disable no-new */
var appVue = new Vue({
  router,
  render: h => h(App)//调用render方法
}).$mount('#app')//把element挂载到app上，
