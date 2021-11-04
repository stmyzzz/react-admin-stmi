/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-22 11:45:02
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-25 16:00:49
 */
import * as R from 'ramda'
export const redirectToLoginPage = () => {
  window.parent.postMessage(
    {
      action: 'login'
    },
    '*'
  )
}

//判断空值
export const removeEmptyField = (form, ignoreArray = []) =>
  R.pickBy(
    (val, key) =>
      R.includes(key, ignoreArray) || (!R.isEmpty(val) && !R.isNil(val)),
    form
  )
