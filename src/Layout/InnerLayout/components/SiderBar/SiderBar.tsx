/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 14:54:48
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 15:32:28
 */
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import Logo from '@/assets/images/logo.png'
import IRoute from '@/router/innerRouter/IRoute'
import Icon from '@/components/base/icon'
import NavLink from './NavLink'
import './index.css'
interface IProps {
  routeMap: IRoute[]
}
const SiderBar: React.FC<IProps> = ({ routeMap }) => {
  const location = useLocation()
  const [activeMenu, setActiveMenu] = useState('/user/adminList')
  const [openKeys, setOpenKeys] = useState(['/'])
  const onselectChange = (e: any) => {
    setActiveMenu(e.key)
  }
  const onOpenChange = (e: any) => {
    setOpenKeys([e[1]])
  }
  useEffect(() => {
    setActiveMenu(location.pathname)
    let paths = location.pathname.split('/')
    setOpenKeys(['/' + paths[1]])
  }, [location.pathname])

  const getMenuItem = (routes: IRoute) => {
    const { title, path, icon, children } = routes
    if (children) {
      return (
        <Menu.SubMenu
          key={path + ''}
          icon={icon ? <Icon name={icon} mode='colour' /> : null}
          title={title}
        >
          {children.map((route: IRoute) => getMenuItem(route))}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={path + ''}>
          <NavLink path={path + ''} icon={icon} title={title} />
        </Menu.Item>
      )
    }
  }
  return (
    <div className='sider-bar'>
      <div className='sider-header'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='admin' />
          <span>admin</span>
        </Link>
      </div>
      <Menu
        selectedKeys={[activeMenu]}
        openKeys={openKeys}
        onClick={onselectChange}
        onOpenChange={onOpenChange}
        theme='light'
        mode='inline'
        className='menu'
      >
        {routeMap.map(route => {
          return getMenuItem(route)
        })}
      </Menu>
    </div>
  )
}
export default SiderBar
