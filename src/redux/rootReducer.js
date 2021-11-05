/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 10:23:45
 */
import { combineReducers } from 'redux'
import { appReducer } from './app/reducer'
import { userReducer } from './user/reducer'
import { roleReducer } from './role/reducer'
import { carReducer } from './carList/reducer'
export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  permission: roleReducer,
  car: carReducer
})
