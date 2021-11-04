/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 14:35:15
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 10:24:17
 */
import { createActions } from 'redux-actions'

export const GET_USER_LIST_REQUEST = 'GET_USER_LIST_REQUEST'
export const GET_USER_LIST_SUCCESSED = 'GET_USER_LIST_SUCCESSED'
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const {
  getUserListRequest,
  getUserListSuccessed,
  addUserRequest,
  updateUserRequest,
  deleteUserRequest
} = createActions({
  [GET_USER_LIST_REQUEST]: payload => payload,
  [GET_USER_LIST_SUCCESSED]: payload => payload,
  [ADD_USER_REQUEST]: payload => payload,
  [UPDATE_USER_REQUEST]: payload => payload,
  [DELETE_USER_REQUEST]: payload => payload
})
