import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Accounts from '../views/Accounts.vue'
import Tournaments from '../views/Tournaments.vue'
import Tours from '../views/Tours.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/Tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/Tours',
      name: 'Tours',
      component: Tours
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
