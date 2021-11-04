/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-02 17:16:03
 */
import { combineSagas } from '../libs/sagaHelpers'
import { userWatcher } from './admin/user/saga'
import { roleWatcher } from './admin/role/saga'
export const rootSaga = combineSagas([userWatcher, roleWatcher])
