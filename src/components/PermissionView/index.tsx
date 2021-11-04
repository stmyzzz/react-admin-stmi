/*
 * @Description:权限
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-26 16:27:04
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 14:32:57
 */
import { userInfoSelector } from '@/redux/app/selectors'
import * as R from 'ramda'
import { useSelector } from 'react-redux'

export interface IPermissionProps {
  authKey: string
  children: any
}
const PermissionView = (props: IPermissionProps) => {
  const permission = useSelector(userInfoSelector).permission.split(',')
  const { authKey, children } = props
  return R.contains(authKey, permission) ? children : null
}

export default PermissionView
