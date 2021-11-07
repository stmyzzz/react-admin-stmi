/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-06 20:12:50
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-06 20:14:05
 */
import axios from './api.request'

//获取配置列表
export const getSetList = params => {
  return axios.get('/set/list', {
    params
  })
}

export const addSet = params => {
  return axios.post('/set/add', params)
}

export const updateSet = params => {
  return axios.post('/set/update', params)
}
