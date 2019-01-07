import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/index',
        name: 'index',
        component: resolve => require(['../pages/Index'], resolve)
    },{
        path: '/icon',
        name: 'icon',
        component: resolve => require(['../pages/Icon'], resolve)
    },{
        path: '*',
        redirect: '/index'
    }]
})
