/*
 * @Description:权限
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-26 16:27:04
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-28 19:24:17
 */
import { FC } from 'react'
import * as R from 'ramda'
export interface IPermissionProps {
  authKey: string
  children: any
}
const PermissionWrapper = (props: IPermissionProps) => {
  const { authKey, children } = props
  const userPermissions = ['1', '2']
  return R.contains(authKey, userPermissions) ? children : null
}

export default PermissionWrapper
