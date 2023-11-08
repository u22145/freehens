import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import fromPage from '../views/fromPage.vue'
import ally from '../views/ally.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fromPage',
    name: 'fromPage',
    component: fromPage
  },
  {
    path: '/ally',
    name: 'ally',
    component: ally
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
