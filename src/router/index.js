import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import RewardsGyakuhiki from '../views/RewardsGyakuhiki'
import StretchGoals from '../views/StretchGoals'
import WhatIsAddOn from '../views/WhatIsAddOn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/what-is-add-on',
    name: 'WhatIsAddOn',
    component: WhatIsAddOn,
  },
  {
    path: '/stretch-goals',
    name: 'StretchGoals',
    component: StretchGoals,
  },
  {
    path: '/rewards-gyakuhiki',
    name: 'RewardsGyakuhiki',
    component: RewardsGyakuhiki,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 }
  },
})

export default router
