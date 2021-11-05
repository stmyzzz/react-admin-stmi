/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 10:24:14
 */
import { combineSagas } from '../libs/sagaHelpers'
import { userWatcher } from './user/saga'
import { roleWatcher } from './role/saga'
import { appWatcher } from './app/saga'
import { carWatcher } from './carList/saga'
export const rootSaga = combineSagas([
  appWatcher,
  userWatcher,
  roleWatcher,
  carWatcher
])
