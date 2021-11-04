/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 13:58:53
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 12:21:52
 */
//获取有权限的路由表
import { of } from 'ramda'
import { IPermission } from '../../model/common'
import IRoute from './IRoute'
import { routes } from './Routes'

const routeMap = routes
const fliterRouteMap = (routeNames: string[], routeMap: IRoute[]) => {
  const acceptRouteMap: IRoute[] = []
  routeMap.forEach((route: IRoute) => {
    // if (routeNames.includes(route.name)) {
    //   acceptRouteMap.push(route)
    // } else if (route.children) {
    //   route.children = fliterRouteMap(routeNames, route.children)
    //   if (route.children.length > 0) {
    //     acceptRouteMap.push(route)
    //   }
    // }
    if (route.children) {
      console.log(`route`, route.children)
      if (routeNames.includes(route.name)) {
        // acceptRouteMap.push(route)
        route.children = fliterRouteMap(routeNames, route.children)
        if (route.children.length > 0) {
          acceptRouteMap.push(route)
        }
      }
    } else {
      if (routeNames.includes(route.name)) {
        acceptRouteMap.push(route)
      }
    }
  })
  return acceptRouteMap
}
//IPermission[]
const initRoutes = (permission: string[]) => {
  return fliterRouteMap(permission, routeMap)
}

export default initRoutes
