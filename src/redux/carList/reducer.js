/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 10:05:51
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 12:27:03
 */
import { handleActions } from 'redux-actions'
import { GET_CAR_LIST_REQUEST, GET_CAR_LIST_SUCCESSED } from './actions'
import * as R from 'ramda'
const INITITAL_STATE = {
  carList: [],
  loading: {
    carList: false
  }
}

export const carReducer = handleActions(
  {
    [GET_CAR_LIST_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          carList: true
        })
      }
    },
    [GET_CAR_LIST_SUCCESSED]: (state, action) => {
      return {
        ...state,
        loading: R.mergeDeepRight(state.loading, {
          carList: false
        }),
        carList: action.payload
      }
    }
  },
  INITITAL_STATE
)
