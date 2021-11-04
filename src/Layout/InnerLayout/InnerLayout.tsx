/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 10:48:13
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 15:01:38
 */
import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import SiderBar from './components/SiderBar'
import { useHistory, useLocation } from 'react-router-dom'
import IRoute from '@/router/innerRouter/IRoute'
import initRoutes from '../../router/innerRouter/initRoutes'
import HeaderBar from './components/HeaderBar'
import TabBar from './components/TabBar'
import InnerRouter from '@/router/innerRouter'
const InnerLayout: React.FC = props => {
  const history = useHistory()
  const Location = useLocation()
  const [collapse, setCollapse] = useState(false)
  const [routeMap, setRouteMap] = useState<IRoute[]>([])
  useEffect(() => {
    // const obj: { title: string; pathname: string } = {
    //   title: '',
    //   pathname: ''
    // }
    // if (res === -1) {
    //   obj.pathname = Location.pathname
    //   arr.push(obj)
    // }
    // localSave('tags', JSON.stringify(arr))
    //检验登录态
    const token = 1
    if (!token) {
      history.replace('/account/login')
    } else {
      setRouteMap(
        initRoutes([
          //权限
          'admin',
          'userAdmin',
          'permissionAdmin',
          'user',
          'userList',
          'adminList',
          'car',
          'carList',
          'setList',
          'panel',
          'sellPanel',
          'setPanel'
        ])
      )
    }
  }, [Location])
  //检验当前页面是否有权限

  // 菜单折叠

  const triggerCollapse = () => {
    setCollapse(state => !state)
  }
  return (
    <Layout className='inner-layout'>
      <Layout.Sider
        style={{ minHeight: '100vh', background: '#fff' }}
        className='inner-layout-sider'
        width={180}
        trigger={null}
        collapsible={true}
        collapsed={collapse}
      >
        <SiderBar routeMap={routeMap} />
      </Layout.Sider>
      <Layout>
        <HeaderBar collapse={collapse} onTrigger={triggerCollapse} />
        <TabBar />
        <div className='content'>
          <InnerRouter routeMap={routeMap} />
        </div>
      </Layout>
    </Layout>
  )
}

export default InnerLayout
