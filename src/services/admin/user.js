/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-02 14:48:54
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 09:42:25
 */
import axios from '../api.request'
//获取用户列表
export const getUserList = params => {
  return axios.get('/user/list', { params })
}
//新增用户列表
export const addUser = params => {
  return axios.post('/user/add', params)
}
//更新用户列表
export const updateUser = params => {
  return axios.post('/user/update', params)
}
//删除用户列表
export const deleteUser = params => {
  return axios.post('/user/delete', params)
}
