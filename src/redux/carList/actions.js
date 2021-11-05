/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 10:05:43
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 10:48:12
 */
import { createActions } from 'redux-actions'
export const GET_CAR_LIST_REQUEST = 'GET_CAR_LIST_REQUEST'
export const GET_CAR_LIST_SUCCESSED = 'GET_CAR_LIST_SUCCESSED'
export const ADD_CAR_REQUEST = 'ADD_CAR_REQUEST'
export const UPDATE_CAR_REQUEST = 'UPDATE_CAR_REQUEST'

export const {
  getCarListRequest,
  getCarListSuccessed,
  addCarRequest,
  updateCarRequest
} = createActions({
  [GET_CAR_LIST_REQUEST]: payload => payload,
  [GET_CAR_LIST_SUCCESSED]: payload => payload,
  [ADD_CAR_REQUEST]: payload => payload,
  [UPDATE_CAR_REQUEST]: payload => payload
})
