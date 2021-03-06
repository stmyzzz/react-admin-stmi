/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-24 17:00:49
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 13:45:21
 */
import { RouteProps } from 'react-router-dom'
import { IconName } from '@/components/base/icon'
// 主要是继承RouteProps的path，exact和component来使用
export default interface IRoute extends RouteProps {
  // name供权限管理使用
  name: string
  // title供菜单使用
  title: string
  path: string
  // icon供菜单使用
  icon?: IconName
  key?: any
  access?: any //权限判断
  // 是否在侧边菜单显示
  hiddenInMenu?: boolean
  children?: IRoute[]
}
