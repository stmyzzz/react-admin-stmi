/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-22 14:20:36
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 14:24:05
 */
import { handleActions } from 'redux-actions'
import { SET_ERROR } from './actions'
const INIT_STATE = {
  error: null
}
export const errorReducer = handleActions(
  {
    [SET_ERROR]: (state, { payload }) => {
      return {
        ...state,
        error: state.payload
      }
    }
  },
  INIT_STATE
)
