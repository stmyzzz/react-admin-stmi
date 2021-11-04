/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-30 17:11:33
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 13:52:16
 */
import moment from 'moment'
import { routes } from '@/router/innerRouter/Routes'
// 读取缓存
export const localRead = key => {
  return localStorage.getItem(key) || ''
}
//设置缓存
export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}
//清空缓存
export const localRemove = key => {
  localStorage.removeItem(key)
}
//路由是否可以被展示
export const getPathByRoutes = pathname => {
  const res = routes.find(item => {
    if (item.children) {
      const res2 = item.children.find(item2 => {
        return item2.path === pathname
      })
      return res2
    }
  })
  return res
}

//国际时间转换标准时间
export const formatTime = (time, format) => {
  return moment(time).format(format)
}
