/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-22 11:05:08
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 10:42:40
 */
import { message } from 'antd'
import axios from 'axios'
import * as R from 'ramda'
import { redirectToLoginPage } from '@/libs/common'
import { API_BASE_PATH } from '../config'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000,
  withCredentials: true
})

//请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

//响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    const { data } = error.response
    message.error({
      content: data.msg | '服务器错误',
      key: 'API_REQUEST'
    })
    if (R.equals(401, data.status)) {
      redirectToLoginPage()
    }
    return Promise.reject(error)
  }
)

export default instance
