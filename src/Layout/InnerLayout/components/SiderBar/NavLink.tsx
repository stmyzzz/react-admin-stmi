/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 14:54:57
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 15:32:24
 */
import React from 'react'
import { Link } from 'react-router-dom'
import Icon, { IconName } from '../../../../components/base/icon'

interface IProps {
  path: string
  icon?: IconName
  title: string
}

const NavLink: React.FC<IProps> = ({ path, icon, title }) => {
  return (
    <Link to={path}>
      {icon ? <Icon name={icon} /> : null}
      <span>{title}</span>
    </Link>
  )
}

export default NavLink
