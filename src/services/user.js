/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-22 11:04:13
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 11:38:12
 */
import axios from './mock'
//获取合同列表
import '@/mock/con'
export const getUserList = params => {
  return axios.get('/con/list')
}

export const getPhotos = params => {
  return axios.get('/user/photos')
}
//操作
export const operaUser = params => {
  return axios.post('/user/operate')
}
