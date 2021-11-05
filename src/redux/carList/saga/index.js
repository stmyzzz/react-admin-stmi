/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 10:06:23
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 10:23:21
 */
import { all, takeLatest } from 'redux-saga/effects'
import {
  GET_CAR_LIST_REQUEST,
  ADD_CAR_REQUEST,
  UPDATE_CAR_REQUEST
} from '../actions'
import { getCarListSaga, addCarSaga, updateCarSaga } from './carSaga'
export function* carWatcher() {
  try {
    yield all([
      takeLatest(GET_CAR_LIST_REQUEST, getCarListSaga),
      takeLatest(ADD_CAR_REQUEST, addCarSaga),
      takeLatest(UPDATE_CAR_REQUEST, updateCarSaga)
    ])
  } catch (err) {
    console.log(`err`, err)
  }
}
