/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-02 17:16:03
 */
import { combineSagas } from '../libs/sagaHelpers'
import { conWatcher } from './user/saga'
import { contractWatcher } from './contract/saga'
import { userWatcher } from './admin/user/saga'
import { permissionWatcher } from './admin/role/saga'
export const rootSaga = combineSagas([
  conWatcher,
  contractWatcher,
  userWatcher,
  permissionWatcher
])
