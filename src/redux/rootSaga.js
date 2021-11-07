/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-07 03:04:06
 */
import { combineSagas } from '../libs/sagaHelpers'
import { userWatcher } from './user/saga'
import { roleWatcher } from './role/saga'
import { appWatcher } from './app/saga'
import { carWatcher } from './carList/saga'
import { setWatcher } from './setList/saga'
export const rootSaga = combineSagas([
  appWatcher,
  userWatcher,
  roleWatcher,
  carWatcher,
  setWatcher
])
