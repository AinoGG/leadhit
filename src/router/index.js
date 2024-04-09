import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'auth',
            path: '/',
            component: () => import('@/pages/AuthPage.vue')
        },
        {
            name: 'analytics',
            path: '/analytics',
            component: () => import('@/pages/AnalyticsPage.vue')
        },
    ]
})