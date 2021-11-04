/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-02 17:18:21
 */
import { combineReducers } from 'redux'
import { appReducer } from './app/reducer'
import { contractReducer } from './contract/reducer'
import { conReducer } from './user/reducer'
import { userReducer } from './admin/user/reducer'
import { permissionReducer } from './admin/role/reducer'
export const rootReducer = combineReducers({
  app: appReducer,
  con: conReducer,
  contract: contractReducer,
  user: userReducer,
  permission: permissionReducer
})
