/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-06 20:15:25
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-06 21:09:28
 */
import { createActions } from 'redux-actions'

export const GET_SET_LIST_REQUEST = 'GET_SET_LIST_REQUEST'
export const GET_SET_LIST_SUCCESSED = 'GET_SET_LIST_SUCCESSED'
export const ADD_SET_REQUEST = 'ADD_SET_REQUEST'
export const UPDATE_SET_REQUEST = 'UPDATE_SET_REQUEST'

export const {
  getSetListRequest,
  getSetListSuccessed,
  addSetRequest,
  updateSetRequest
} = createActions({
  [GET_SET_LIST_REQUEST]: payload => payload,
  [GET_SET_LIST_SUCCESSED]: payload => payload,
  [ADD_SET_REQUEST]: payload => payload,
  [UPDATE_SET_REQUEST]: payload => payload
})
