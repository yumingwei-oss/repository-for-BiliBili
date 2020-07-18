/*
 * @Date: 2020-07-13 17:12:27
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-18 01:14:33
 * @FilePath: \vue_bilibili\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './asserts/icon/iconfont.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
