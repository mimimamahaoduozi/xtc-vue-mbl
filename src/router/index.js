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
        name: 'HomePage',
        component: resolve => require(['@/view/product/produce.vue'], resolve)
      },
      {
        path: '/about',
        name: 'About',
        component: resolve => require(['@/view/home-page/index.vue'], resolve)
      },
      {
        path: '/news',
        name: 'News',
        component: resolve => require(['@/view/news/news-content.vue'], resolve)
      },
      {
        path: '/product',
        name: 'Product',
        component: resolve => require(['@/view/product/produce.vue'], resolve)
      },
      {
        path: '/success',
        name: 'Success',
        component: resolve => require(['@/view/success/success.vue'], resolve)
      },
      {
        path: '/contact',
        name: 'Contact',
        component: resolve => require(['@/view/product/produce.vue'], resolve)
      }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

router.beforeResolve((to, from, next) => {
    next()
})

export default router
