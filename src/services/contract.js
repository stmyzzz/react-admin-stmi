/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-29 16:31:42
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 11:45:32
 */

import axios from './mock'
//获取合同列表
import '@/mock/contract'
export const getContractList = params => {
  return axios.get('/contract/list')
}

//操作
export const operaContract = params => {
  return axios.post('/contract/operate')
}
