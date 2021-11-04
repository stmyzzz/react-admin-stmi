/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-08-30 16:30:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 12:33:20
 */
import { put, call } from 'redux-saga/effects'
import { login } from '@/services/login'
import { setError } from '@/redux/error/actions'
export function* loginSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(login, payload)
    if (resolve) return resolve(response)
  } catch (e) {
    yield put(setError(e))
    if (reject) reject(e)
  }
}
