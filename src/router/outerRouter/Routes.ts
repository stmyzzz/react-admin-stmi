/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-01 17:55:53
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-01 17:55:53
 */
import { lazy } from 'react'
const Page404 = lazy(() => import('../../pages/error/404'))
const Page403 = lazy(() => import('../../pages/error/403'))
const errorRoutes = [
  {
    name: '/404',
    title: '404',
    path: '/404',
    exact: true,
    component: Page404
  },
  {
    name: '/403',
    title: '403',
    path: '/403',
    exact: true,
    component: Page403
  }
]

export { errorRoutes }
