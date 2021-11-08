/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 15:57:00
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:43:32
 */
import { createActions } from 'redux-actions'
export const GET_ROLE_LIST_REQUEST = 'GET_ROLE_LIST_REQUEST'
export const GET_ROLE_LIST_SUCCESSED = 'GET_ROLE_LIST_SUCCESSED'
export const ADD_ROLE_REQUEST = 'ADD_ROLE_REQUEST'
export const UPDATE_ROLE_REQUEST = 'UPDATE_ROLE_REQUEST'

export const {
  getRoleListRequest,
  getRoleListSuccessed,
  addRoleRequest,
  updateRoleRequest
} = createActions({
  [GET_ROLE_LIST_REQUEST]: payload => payload,
  [GET_ROLE_LIST_SUCCESSED]: payload => payload,
  [ADD_ROLE_REQUEST]: payload => payload,
  [UPDATE_ROLE_REQUEST]: payload => payload
})
