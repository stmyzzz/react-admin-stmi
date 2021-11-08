/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-07 03:04:24
 */
import { combineReducers } from 'redux'
import { appReducer } from './app/reducer'
import { userReducer } from './userList/reducer'
import { roleReducer } from './roleList/reducer'
import { carReducer } from './carList/reducer'
import { setReducer } from './setList/reducer'
export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  permission: roleReducer,
  car: carReducer,
  set: setReducer
})
