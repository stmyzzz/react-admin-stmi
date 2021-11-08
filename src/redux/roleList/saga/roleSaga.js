/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 15:57:38
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 14:46:17
 */
import { put, call } from 'redux-saga/effects'
import { getRoleList, addRole, updateRole } from '@/services/admin/role'
import { setError } from '@/redux/error/actions'
import { getRoleListSuccessed } from '@/redux/roleList/actions'
export function* getRoleSaga({ payload }) {
  try {
    const res = yield call(getRoleList, payload)
    if (res.ret === 0) {
      yield put(getRoleListSuccessed(res))
      return
    }
  } catch (e) {
    yield put(setError(e))
  }
}
export function* addRoleSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(addRole, payload)
    if (resolve) resolve(response)
  } catch (e) {
    yield put(setError(e))
    if (reject) reject(e)
  }
}

export function* updateRoleSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(updateRole, payload)
    if (resolve) resolve(response)
  } catch (e) {
    yield put(setError(e))
    if (reject) reject(e)
  }
}
