import type { RouteLocationNormalizedLoaded, Router } from "vue-router";
import  { type MenuKey, menus } from '@/router/menu';



const pathRe = /^(?:https?:\/\/[\w\d\.:]+)?\/([\w-]+)\/?/;
/**
 * 获取当前的（顶部）路由name
 */
export function getCurrentRouteName(route: RouteLocationNormalizedLoaded | string) {
  if (typeof route === 'string') {
    return (route.match(pathRe)?.[1] ?? 'home') as MenuKey;
  } else {
    return (route.fullPath.match(pathRe)?.[1] ?? 'home') as MenuKey
  }
}

/**
 * 注册动态路由
 */
export function addDynamicRoutes(router: Router, to: RouteLocationNormalizedLoaded | string) {
  const routeName = getCurrentRouteName(to)
  const dynamicRoute = menus[routeName] ?? [];
  // 注册动态路由
  dynamicRoute.forEach(route => {
    if (!router.hasRoute(route.name!)) {
      router.addRoute('home', route)
    }
  })
  return dynamicRoute;
}