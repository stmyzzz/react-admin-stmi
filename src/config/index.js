/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-22 11:15:41
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 09:40:32
 */
const hostname = window.location.hostname
let env = ''

if (/localhost/.test(hostname)) {
  env = 'local'
} else if (/-dev/.test(hostname)) {
  env = 'dev'
} else if (/-stg/.test(hostname)) {
  env = 'stg'
} else if (/-pre/.test(hostname)) {
  env = 'pre'
}

export const API_BASE_PATH =
  env === 'local' || env === 'dev' ? '/api' : `http://112.74.56.190:3000`

export const defaultPageConfig = {
  pageNo: 1,
  pageSize: 10
}
