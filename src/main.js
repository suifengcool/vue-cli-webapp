import Vue from 'vue'
import App from './App'
import router from './router'
import Config from './config'
import store from './store'

// 全局引入 xxb-ui
import XXBUI from 'xxb-ui'
Vue.use(XXBUI)

// 点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

window.xxb = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  data: {
    config: Config, // 全局注入配置
  }
});
