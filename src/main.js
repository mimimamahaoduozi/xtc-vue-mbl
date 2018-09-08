import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import { HTTP } from './util/axios'
import store from './store'
import '@/theme/index.scss'
import '@/assets/style/base.css'
import './assets/style/icon/iconfont.js'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$http = HTTP

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
