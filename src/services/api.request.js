/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-22 11:05:08
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:24:29
 */
import { message } from 'antd'
import axios from 'axios'
import * as R from 'ramda'
import { redirectToLoginPage } from '@/libs/common'
import { API_BASE_PATH } from '../config'

const instance = axios.create({
  baseURL: API_BASE_PATH,
  timeout: 15000
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
      content: data.errmsg | '服务器错误',
      key: 'API_REQUEST'
    })
    if (R.equals(401, data.status)) {
      redirectToLoginPage()
    }
    return Promise.reject(error)
  }
)

export default instance
