/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-22 14:18:50
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 14:20:16
 */
import { createActions } from 'redux-actions'
export const SET_ERROR = 'SET_ERROR'
export const { setError } = createActions({
  [SET_ERROR]: payload => payload
})
