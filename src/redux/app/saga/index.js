/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-30 09:56:25
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:40:14
 */
import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST } from '../actions'
import { loginSaga } from './appSaga'
export function* appWatcher() {
  try {
    yield all([takeLatest(LOGIN_REQUEST, loginSaga)])
  } catch (err) {
    console.log(err)
  }
}
