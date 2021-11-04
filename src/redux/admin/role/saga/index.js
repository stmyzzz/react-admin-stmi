/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-02 15:58:08
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-02 17:15:46
 */
import { all, takeLatest } from 'redux-saga/effects'
import {
  GET_PERMISSION_LIST_REQUEST,
  ADD_ROLE_REQUEST,
  UPDATE_ROLE_REQUEST
} from '../actions'
import { getRoleSaga, addRoleSaga, updateRoleSaga } from './permissionSaga'
export function* permissionWatcher() {
  try {
    yield all([
      takeLatest(GET_PERMISSION_LIST_REQUEST, getRoleSaga),
      takeLatest(ADD_ROLE_REQUEST, addRoleSaga),
      takeLatest(UPDATE_ROLE_REQUEST, updateRoleSaga)
    ])
  } catch (err) {
    console.log(err)
  }
}
