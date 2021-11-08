/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 16:31:57
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 10:25:30
 */
import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './index.css'
import BreadCrumb from './BreadCrumb'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Menu, Dropdown } from 'antd'
import { userInfoSelector } from '@/redux/app/selectors'
import { removeUserInfo } from '@/redux/app/actions'
interface IHeaderProps {
  collapse: boolean
  onTrigger: () => void
}

const HeaderBar: React.FC<IHeaderProps> = props => {
  const { collapse, onTrigger } = props
  const nameEn = useSelector(userInfoSelector).nameEn
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () => {
    dispatch(removeUserInfo())
    history.replace('/login')
  }
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
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key='1' onClick={handleLogout}>
                退出登录
              </Menu.Item>
            </Menu>
          }
          placement='bottomLeft'
        >
          <Avatar
            style={{ backgroundColor: '#f56a00', cursor: 'pointer' }}
            size={50}
          >
            {nameEn.split('.')[0] || '未登录'}
          </Avatar>
        </Dropdown>
      </div>
    </div>
  )
}

export default HeaderBar
