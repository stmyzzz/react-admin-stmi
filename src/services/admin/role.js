/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-02 16:19:28
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 09:35:37
 */
import axios from '../api.request'
//获取角色列表
export const getRoleList = params => {
  return axios.get('/role/list', { params })
}
//新增角色列表
export const addRole = params => {
  return axios.post('/role/add', params)
}
//更新角色列表
export const updateRole = params => {
  return axios.post('/role/update', params)
}
