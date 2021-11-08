/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 14:35:18
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 14:46:20
 */
import { handleActions } from 'redux-actions'
import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESSED } from './actions'
import * as R from 'ramda'
const INITITAL_STATE = {
  userList: [],
  loading: {
    userList: false
  }
}
export const userReducer = handleActions(
  {
    [GET_USER_LIST_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          userList: true
        })
      }
    },
    [GET_USER_LIST_SUCCESSED]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          userList: false
        }),
        userList: action.payload
      }
    }
  },
  INITITAL_STATE
)
