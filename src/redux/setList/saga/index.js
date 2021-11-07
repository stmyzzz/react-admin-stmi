/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-06 23:14:10
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-07 02:53:35
 */

import { all, takeLatest } from 'redux-saga/effects'
import {
  GET_SET_LIST_REQUEST,
  ADD_SET_REQUEST,
  UPDATE_SET_REQUEST
} from '../actions'
import { getSetSaga, addSetSaga, updateSetSaga } from './setSaga'

export function* setWatcher() {
  try {
    yield all([
      takeLatest(GET_SET_LIST_REQUEST, getSetSaga),
      takeLatest(ADD_SET_REQUEST, addSetSaga),
      takeLatest(UPDATE_SET_REQUEST, updateSetSaga)
    ])
  } catch (err) {
    console.log(err)
  }
}
