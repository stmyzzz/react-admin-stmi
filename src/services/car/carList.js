/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 10:01:07
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 10:04:40
 */
import axios from '../api.request'
//获取车列表
export const getCarList = params => {
  return axios.get('/car/list', { params })
}
//增加车列表
export const addCar = params => {
  return axios.post('/car/add', params)
}
//更新车列表
export const updateCar = params => {
  return axios.post('/car/update', params)
}
