/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 10:59:55
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-01 17:55:46
 */
/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 10:59:55
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-15 09:29:38
 */
import { RouteProps } from 'react-router-dom'
// 主要是继承RouteProps的path，exact和component来使用
export default interface IRoute extends RouteProps {
  // name供权限管理使用
  // title供菜单使用
  title: string
  path: string
  key: string
  // 是否在侧边菜单显示
  hiddenInMenu?: boolean
  children?: IRoute[]
}
