/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:40:45
 */
import { combineSagas } from '../libs/sagaHelpers'
import { userWatcher } from './admin/user/saga'
import { roleWatcher } from './admin/role/saga'
import { appWatcher } from './app/saga'
export const rootSaga = combineSagas([appWatcher, userWatcher, roleWatcher])
