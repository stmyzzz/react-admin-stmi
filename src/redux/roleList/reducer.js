/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 15:57:12
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 13:03:19
 */
import { handleActions } from 'redux-actions'
import { GET_ROLE_LIST_REQUEST, GET_ROLE_LIST_SUCCESSED } from './actions'
import * as R from 'ramda'
const INITIAL_STATE = {
  permissionList: [],
  loading: {
    permissionList: false
  }
}

export const roleReducer = handleActions(
  {
    [GET_ROLE_LIST_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          permissionList: true
        })
      }
    },
    [GET_ROLE_LIST_SUCCESSED]: (state, action) => {
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
