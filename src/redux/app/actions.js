/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-30 09:56:25
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 13:50:43
 */
import { createActions } from 'redux-actions'

export const ADD_TAG = 'ADD_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'
export const SET_ACTIVE_TAG = 'SET_ACTIVE_TAG'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const SET_USER_INFO = 'SET_USER_INFO'
export const REMOVE_USER_INFO = 'REMOVE_USER_INFO'
export const {
  addTag,
  removeTag,
  setActiveTag,
  loginRequest,
  setUserInfo,
  removeUserInfo
} = createActions({
  [ADD_TAG]: payload => payload,
  [REMOVE_TAG]: payload => payload,
  [SET_ACTIVE_TAG]: payload => payload,
  [LOGIN_REQUEST]: payload => payload,
  [SET_USER_INFO]: payload => payload,
  [REMOVE_USER_INFO]: payload => payload
})
