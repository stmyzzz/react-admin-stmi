/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 14:35:35
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 14:46:22
 */
import { call, put } from 'redux-saga/effects'
import {
  getUserList,
  addUser,
  updateUser,
  deleteUser
} from '@/services/admin/user'
import { setError } from '@/redux/error/actions'
import { getUserListSuccessed } from '@/redux/userList/actions'

export function* getUserListSaga({ payload }) {
  try {
    const res = yield call(getUserList, payload)
    if (res.ret === 0) {
      yield put(getUserListSuccessed(res))
      return
    }
  } catch (e) {
    yield put(setError(e))
  }
}

export function* addUserSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(addUser, payload)
    if (resolve) resolve(response)
  } catch (e) {
    yield put(setError(e))
    if (reject) reject(e)
  }
}
export function* updateUserSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(updateUser, payload)
    if (resolve) resolve(response)
  } catch (e) {
    yield put(setError(e))
    if (reject) reject(e)
  }
}
export function* deleteUserSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(deleteUser, payload)
    if (resolve) resolve(response)
  } catch (e) {
    yield put(setError(e))
    if (reject) reject(e)
  }
}
