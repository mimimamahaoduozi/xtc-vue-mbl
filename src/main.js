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
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});
Vue.use(wcSwiper);

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
