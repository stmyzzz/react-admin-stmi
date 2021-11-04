/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 16:31:57
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 14:49:35
 */
import React, { useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './index.css'
import BreadCrumb from './BreadCrumb'
import { Avatar, Menu, Dropdown } from 'antd'
interface IHeaderProps {
  collapse: boolean
  onTrigger: () => void
}
const menu = (
  <Menu>
    <Menu.Item key='1'>退出登录</Menu.Item>
  </Menu>
)
const HeaderBar: React.FC<IHeaderProps> = props => {
  const { collapse, onTrigger } = props
  return (
    <div className='header-bar'>
      <div className='header-left'>
        {collapse ? (
          <MenuUnfoldOutlined
            className='header-bar__trigger'
            onClick={onTrigger}
          />
        ) : (
          <MenuFoldOutlined
            className='header-bar__trigger'
            onClick={onTrigger}
          />
        )}
        <div className='bread-crumb'>
          <BreadCrumb />
        </div>
      </div>
      <div className='info'>
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Avatar
            style={{ backgroundColor: '#f56a00', cursor: 'pointer' }}
            size={50}
          >
            dlyan
          </Avatar>
        </Dropdown>
      </div>
    </div>
  )
}

export default HeaderBar
