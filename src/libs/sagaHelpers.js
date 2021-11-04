/*
 * @Description:工具函数 使用map遍历所有的saga
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 14:43:30
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 17:04:38
 */
import { all, fork } from 'redux-saga/effects'

export const combineSagas = sagas =>
  function* rootSaga() {
    try {
      yield all(sagas.map(fork))
    } catch (err) {
      console.error(err)
    }
  }
