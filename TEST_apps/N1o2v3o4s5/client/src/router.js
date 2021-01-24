import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/main/Home'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import UserBoard from '@/views/user/UserBoard'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      path: '/',
      component: Home
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { guest: true }
    }, {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { guest: true }
    }, {
      path: '/userboard',
      name: 'userboard',
      component: UserBoard,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null)
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            });
        else
            next()
    } else if (to.matched.some(record => record.meta.guest))
        if (localStorage.getItem('jwt') == null)
            next()
        else
            next({ name: 'userboard' })
    else
        next()
})
