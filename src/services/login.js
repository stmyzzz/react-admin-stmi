/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-04 11:34:31
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:35:31
 */
import axios from './api.request'

//登录
export const login = params => {
  return axios.post('/login', params)
}
