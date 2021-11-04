/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 15:57:12
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-02 16:14:57
 */
import { handleActions } from 'redux-actions'
import {
  GET_PERMISSION_LIST_REQUEST,
  GET_PERMISSION_LIST_SUCCESSED
} from './actions'
import * as R from 'ramda'
const INITIAL_STATE = {
  permissionList: [],
  loading: {
    permissionList: false
  }
}

export const permissionReducer = handleActions(
  {
    [GET_PERMISSION_LIST_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          permissionList: true
        }),
        permissionList: action.payload
      }
    },
    [GET_PERMISSION_LIST_SUCCESSED]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          permissionList: false
        }),
        permissionList: action.payload
      }
    }
  },
  INITIAL_STATE
)
