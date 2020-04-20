import Vue from 'vue';
import Home from '@/views/Home';
import VueRouter from 'vue-router';

// Vue.use({router: VueRouter})
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('@/views/Todos.vue') // Lazy loading
        }
    ]
})
