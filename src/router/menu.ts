import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


//@unocss-include
const homeMenus: RouteRecordRaw[] = [
  {
    path: '/home/functionA',
    meta: { title: '首页功能A', icon: 'i-ep-document' },
    name: 'home-functionA',
    component: () => import('@/views/home/menus/functionA.vue'),
  },
  {
    path: '/home/functionB',
    meta: { title: '首页功能B', icon: 'i-ep-suitcase' },
    name: 'home-functionB',
    component: () => import('@/views/home/menus/functionB.vue'),
  },
  {
    path: '/home/functionC',
    meta: { title: '首页功能C', icon: 'i-ep-data-line' },
    name: 'home-functionC',
    component: () => import('@/views/home/menus/functionC.vue'),
  },
  {
    path: '/home/functionD',
    meta: { title: '首页功能D', icon: 'i-ep-data-analysis' },
    name: 'home-functionD',
    component: () => import('@/views/home/menus/functionD.vue'),
  },
  {
    path: '/home/functionE',
    meta: { title: '首页功能E', icon: 'i-ep-setting'},
    name: 'home-functionE',
    component: () => import('@/views/home/menus/functionE.vue'),
  },
]

const mainMenus: RouteRecordRaw[] = [
  {
    path: '/main-data/functionA',
    meta: { title: '主数据功能A', icon: 'el-setting' },
    name: 'main-functionA',
    component: () => import('@/views/main-data/menus/functionA.vue'),
  },
  {
    path: '/main-data/functionB',
    meta: { title: '主数据功能B' },
    name: 'main-functionB',
    component: () => import('@/views/main-data/menus/functionB.vue'),
  },
  {
    path: '/main-data/functionC',
    meta: { title: '主数据功能C' },
    name: 'main-functionC',
    component: () => import('@/views/main-data/menus/functionC.vue'),
  },
  {
    path: '/main-data/functionD',
    meta: { title: '主数据功能D' },
    name: 'main-functionD',
    component: () => import('@/views/main-data/menus/functionD.vue'),
  },
  {
    path: '/main-data/functionE',
    meta: { title: '主数据功能E',  },
     name: 'main-functionE',
    component: () => import('@/views/main-data/menus/functionE.vue'),
  },
]
const areaMenus: RouteRecordRaw[] = [
  {
    path: '/area-management/functionA',
    meta: { title: '辖区功能A', icon: 'el-setting' },
    name: 'area-functionA',
    component: () => import('@/views/area-management/menus/functionA.vue'),
  },
  {
    path: '/area-management/functionB',
    meta: { title: '辖区功能B' },
    name: 'area-functionB',
    component: () => import('@/views/area-management/menus/functionB.vue'),
  },
  {
    path: '/area-management/functionC',
    meta: { title: '辖区功能C' },
    name: 'area-functionC',
    component: () => import('@/views/area-management/menus/functionC.vue'),
  },
  {
    path: '/area-management/functionD',
    meta: { title: '辖区功能D' },
    name: 'area-functionD',
    component: () => import('@/views/area-management/menus/functionD.vue'),
  },
  {
    path: '/area-management/functionE',
    meta: { title: '辖区功能E',  },
     name: 'area-functionE',
    component: () => import('@/views/area-management/menus/functionE.vue'),
  },
]
const actionMenus: RouteRecordRaw[] = [
  {
    path: '/action-management/functionA',
    meta: { title: '行为管理系统功能A', icon: 'el-setting' },
    name: 'action-functionA',
    component: () => import('@/views/action-management/menus/functionA.vue'),
  },
  {
    path: '/action-management/functionB',
    meta: { title: '行为管理系统功能B' },
    name: 'action-functionB',
    component: () => import('@/views/action-management/menus/functionB.vue'),
  },
  {
    path: '/action-management/functionC',
    meta: { title: '行为管理系统功能C' },
    name: 'action-functionC',
    component: () => import('@/views/action-management/menus/functionC.vue'),
  },
  {
    path: '/action-management/functionD',
    meta: { title: '行为管理系统功能D' },
    name: 'action-functionD',
    component: () => import('@/views/action-management/menus/functionD.vue'),
  },
  {
    path: '/action-management/functionE',
    meta: { title: '行为管理系统功能E',  },
     name: 'action-functionE',
    component: () => import('@/views/action-management/menus/functionE.vue'),
  },
]

// 头部导航
export const headerMenus: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {title: '首页', icon: 'i-ant-design-home-outlined'},
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/main-data',
    name: 'main-data',
    meta: {title: '主数据', icon: 'i-ant-design-cloud-server-outlined'},
    component: () => import('@/views/main-data/index.vue'),
  },
  {
    path: '/area-management',
    name: 'area-management',
    meta: {title: '辖区管理', icon: 'i-ant-design-deployment-unit-outlined'},
    component: () => import('@/views/area-management/index.vue'),
  },
  {
    path: '/action-management',
    name: 'action-management',
    meta: {title: '销讯通', subtitle: '行为管理系统', icon: 'i-ant-design-property-safety-filled'},
    component: () => import('@/views/action-management/index.vue'),
  }
]


export const menus = {
  home: homeMenus,
  'main-data': mainMenus,
  'area-management': areaMenus,
  'action-management': actionMenus,
}

export type MenuKey = keyof typeof menus