import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { HTTP } from './util/axios'
import store from './store'
import '@/theme/index.scss'
import '@/assets/style/base.css'
import './assets/style/icon/iconfont.js'

//引入mockjs
require('./mock/index');
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = HTTP;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
