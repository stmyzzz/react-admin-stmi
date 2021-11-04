/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-30 09:56:25
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-02 16:10:39
 */
import { createActions } from 'redux-actions'

export const ADD_TAG = 'ADD_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'
export const SET_ACTIVE_TAG = 'SET_ACTIVE_TAG'

export const { addTag, removeTag, setActiveTag } = createActions({
  [ADD_TAG]: payload => payload,
  [REMOVE_TAG]: payload => payload,
  [SET_ACTIVE_TAG]: payload => payload
})
