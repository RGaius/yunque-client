import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import YuQueStorage from '@/common/YuQueStorage'

Vue.use(iView)
Vue.prototype.$storage = new YuQueStorage()
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://www.yuque.com/api/v2/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
