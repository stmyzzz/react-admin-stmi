/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:16:20
 */
import { combineReducers } from 'redux'
import { appReducer } from './app/reducer'
import { userReducer } from './admin/user/reducer'
import { permissionReducer } from './admin/role/reducer'
export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  permission: permissionReducer
})
