/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 13:42:19
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 11:14:42
 */
import { lazy } from 'react'
import IRoute from './IRoute'
const CarList = lazy(() => import('../../pages/CarList'))
const SetList = lazy(() => import('../../pages/SetList'))
const Home = lazy(() => import('../../pages/home'))
const UserList = lazy(() => import('../../pages/UserList'))
const PermissionList = lazy(() => import('../../pages/RoleList'))
const sellPanel = lazy(() => import('../../pages/SellPanel'))
const setPanel = lazy(() => import('../../pages/SetPanel'))

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
    access: 'admin',
    children: [
      {
        name: 'userAdmin',
        title: '用户管理',
        path: '/admin/user',
        access: 'userAdmin',
        exact: true,
        key: 'userAdmin',
        component: UserList
      },
      {
        name: 'permissionAdmin',
        title: '权限管理',
        key: 'permissionAdmin',
        path: '/admin/permission',
        access: 'permissionAdmin',
        exact: true,
        component: PermissionList
      }
    ]
  },
  {
    name: 'car',
    title: '汽车',
    path: '/car',
    icon: 'menu3',
    key: 'car',
    access: 'car',
    exact: true,
    children: [
      {
        name: 'carList',
        title: '汽车列表',
        path: '/car/carList',
        exact: true,
        key: 'carList',
        access: 'carList',
        component: CarList
      },
      {
        name: 'setList',
        title: '配置列表',
        path: '/car/setList',
        exact: true,
        access: 'setList',
        key: 'setList',
        component: SetList
      }
    ]
  },
  {
    name: 'panel',
    title: '汽车看板',
    path: '/panel',
    icon: 'menu5',
    key: 'panel',
    exact: true,
    access: 'panel',
    children: [
      {
        name: 'sellPanel',
        title: '销售看板',
        path: '/panel/sell',
        exact: true,
        key: 'sellPanel',
        access: 'sellPanel',
        component: sellPanel
      },
      {
        name: 'setPanel',
        title: '配置看板',
        path: '/panel/set',
        exact: true,
        key: 'setPanel',
        access: 'setPanel',
        component: setPanel
      }
    ]
  }
]

export { routes, appRoutes }
