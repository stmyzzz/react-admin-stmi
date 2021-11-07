/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-06 23:14:02
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-07 03:36:44
 */
import { put, call } from 'redux-saga/effects'
import { getSetList, addSet, updateSet } from '@/services/setList'
import { setError } from '@/redux/error/actions'
import { getSetListSuccessed } from '../actions'

export function* getSetSaga({ payload }) {
  try {
    const res = yield call(getSetList, payload)
    if (res.ret === 0) {
      yield put(getSetListSuccessed(res.data))
      return
    }
  } catch (err) {
    yield put(setError(err))
  }
}

export function* addSetSaga({ payload, resolve, reject }) {
  try {
    const res = yield call(addSet, payload)
    if (resolve) resolve(res)
  } catch (err) {
    yield put(setError(err))
    if (reject) reject(err)
  }
}

export function* updateSetSaga({ payload, resolve, reject }) {
  try {
    const res = yield call(updateSet, payload)
    if (resolve) resolve(res)
  } catch (err) {
    yield put(setError(err))
    if (reject) reject(err)
  }
}
