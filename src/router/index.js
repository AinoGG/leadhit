import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'auth',
            path: '/auth',
            component: () => import('@/pages/AuthPage.vue')
        },
        {
            name: 'analitics',
            path: '/analitics',
            component: () => import('@/pages/AnaliticsPage.vue')
        },
    ]
})