import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue';
import { headerMenus, menus } from './menu';
import { getCurrentRouteName, addDynamicRoutes } from '@/lib/route';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: Layout,
    children: [
      ...headerMenus,
    ]
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



addDynamicRoutes(router, location.href)
router.beforeEach((to,) => {
  addDynamicRoutes(router, to)
})

export default router
