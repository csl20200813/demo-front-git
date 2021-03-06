// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import axios from 'axios'
Vue.prototype.$axios = axios

//引入大文件分片上传
import uploader from 'vue-simple-uploader'
Vue.use(uploader)

Vue.use(ElementUI)
Vue.config.productionTip = false

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
