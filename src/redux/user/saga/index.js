/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 14:35:26
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 10:22:20
 */
import { all, takeLatest } from 'redux-saga/effects'
import {
  GET_USER_LIST_REQUEST,
  ADD_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from '../actions'
import {
  getUserListSaga,
  addUserSaga,
  updateUserSaga,
  deleteUserSaga
} from './userSaga'
export function* userWatcher() {
  try {
    yield all([
      takeLatest(GET_USER_LIST_REQUEST, getUserListSaga),
      takeLatest(ADD_USER_REQUEST, addUserSaga),
      takeLatest(UPDATE_USER_REQUEST, updateUserSaga),
      takeLatest(DELETE_USER_REQUEST, deleteUserSaga)
    ])
  } catch (err) {
    console.log(err)
  }
}
