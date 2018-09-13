import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        // 按需加载（推荐）
        // {
        //     path: '/',
        //     name: 'HomePage',
        //     component: resolve => require(['@/view/home-page/index.vue'], resolve)
        // },
      {
        path: '/',
        component: resolve => require(['@/view/home-page/index.vue'], resolve)
      },
      {
        path: '/about',
        component: resolve => require(['@/view/about/about.vue'], resolve)
      },
      {
        path: '/news',
        component: resolve => require(['@/view/news/news-content.vue'], resolve)
      },
      {
        path: '/product',
        component: resolve => require(['@/view/product/produce.vue'], resolve)
      },
      {
        path: '/success',
        component: resolve => require(['@/view/success/success.vue'], resolve)
      },
      {
        path: '/contact',
        component: resolve => require(['@/view/contact/contact.vue'], resolve)
      }
    ]
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
});

router.beforeResolve((to, from, next) => {
    next()
});

export default router
