/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-06 21:10:30
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-07 03:56:19
 */

import { handleActions } from 'redux-actions'

import { GET_SET_LIST_REQUEST, GET_SET_LIST_SUCCESSED } from './actions'
import * as R from 'ramda'
const INITIAL_STATE = {
  setList: [],
  loading: {
    setList: false
  }
}

export const setReducer = handleActions(
  {
    [GET_SET_LIST_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          setList: true
        })
      }
    },
    [GET_SET_LIST_SUCCESSED]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          setList: false
        }),
        setList: action.payload
      }
    }
  },
  INITIAL_STATE
)
