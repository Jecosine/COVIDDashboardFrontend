/*
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 10:14:55
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const quickView = () => import('@/views/partial/QuickView.vue')
const chinaHistory = () => import('@/views/partial/ChinaHistory.vue')
const provinceStat = () => import('@/views/partial/ProvinceStat.vue')
const custom = () => import('@/components/MixCharts.vue')
const international = () => import('@/views/partial/International.vue')
const rank = () => import('@/components/Rank.vue')
const rankInter = () => import('@/components/RankInter.vue')
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
      },
      {
        path: 'custom',
        name: '自定义统计',
        component: custom
      },
      {
        path: 'international',
        name: '国际总览',
        component: international
      },
      {
        path: 'interNew',
        name: '新增排名',
        component: rankInter
      },
      {
        path: 'nationNew',
        name: '国内新增',
        component: rank
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
