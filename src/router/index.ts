/*
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 02:22:45
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const quickView = () => import('@/views/partial/QuickView.vue')
const chinaHistory = () => import('@/views/partial/ChinaHistory.vue')
const provinceStat = () => import('@/views/partial/ProvinceStat.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/quickview'
      },
      {
        path: 'quickview',
        name: '疫情速览',
        component: quickView
      },
      {
        path: 'quickview',
        name: '国内疫情',
        component: chinaHistory
      },
      {
        path: 'province',
        name: '各省份统计',
        component: provinceStat
      }
    ]
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
