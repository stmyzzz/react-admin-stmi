/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 13:42:19
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 10:11:30
 */
import { lazy } from 'react'
import IRoute from './IRoute'
const CarList = lazy(() => import('../../pages/car/CarList'))
const SetList = lazy(() => import('../../pages/car/SetList'))
const Home = lazy(() => import('../../pages/home'))
const UserList = lazy(() => import('../../pages/admin/UserList'))
const PermissionList = lazy(() => import('../../pages/admin/RoleList'))
const sellPanel = lazy(() => import('../../pages/panel/SellPanel'))
const setPanel = lazy(() => import('../../pages/panel/SetPanel'))
//单独路由
const appRoutes = [
  {
    name: '/home',
    title: '首页',
    path: '/',
    exact: true,
    component: Home
  }
]

const routes: IRoute[] = [
  {
    name: 'admin',
    title: '系统管理',
    path: '/admin',
    icon: 'menu1',
    key: 'admin',
    exact: true,
    children: [
      {
        name: 'userAdmin',
        title: '用户管理',
        path: '/admin/user',
        exact: true,
        key: 'userAdmin',
        component: UserList
      },
      {
        name: 'permissionAdmin',
        title: '权限管理',
        key: 'permissionAdmin',
        path: '/admin/permission',
        exact: true,
        component: PermissionList
      }
    ]
  },
  {
    name: 'car',
    title: '跑车',
    path: '/car',
    icon: 'menu2',
    key: 'car',
    exact: true,
    children: [
      {
        name: 'carList',
        title: '跑车列表',
        path: '/car/carList',
        exact: true,
        key: 'carList',
        component: CarList
      },
      {
        name: 'setList',
        title: '配置列表',
        path: '/car/setList',
        exact: true,
        key: 'setList',
        component: SetList
      }
    ]
  },
  {
    name: 'panel',
    title: '跑车看板',
    path: '/panel',
    icon: 'menu2',
    key: 'panel',
    exact: true,
    children: [
      {
        name: 'sellPanel',
        title: '销售',
        path: '/panel/sell',
        exact: true,
        key: 'sellPanel',
        component: sellPanel
      },
      {
        name: 'setPanel',
        title: '配置',
        path: '/panel/set',
        exact: true,
        key: 'setPanel',
        component: setPanel
      }
    ]
  }
]

export { routes, appRoutes }
