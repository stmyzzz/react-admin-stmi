/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 10:06:17
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-06 17:52:26
 */

import { put, call } from 'redux-saga/effects'
import { getCarList, addCar, updateCar } from '@/services/car/carList'
import { setError } from '@/redux/error/actions'
import { getCarListSuccessed } from '../actions'

export function* getCarListSaga({ payload }) {
  try {
    const response = yield call(getCarList, payload)
    console.log(`response`, response)
    if (response.ret === 0) {
      yield put(getCarListSuccessed(response))
      return
    }
  } catch (err) {
    yield put(setError(err))
  }
}

export function* addCarSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(addCar, payload)
    if (resolve) return resolve(response)
  } catch (err) {
    yield put(setError(err))
    if (reject) reject(err)
  }
}

export function* updateCarSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(updateCar, payload)
    if (resolve) return resolve(response)
  } catch (err) {
    yield put(setError(err))
    if (reject) reject(err)
  }
}
