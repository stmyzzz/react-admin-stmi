/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 10:48:13
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 17:11:30
 */
import React, { useState, useEffect } from 'react'
import { Layout, message } from 'antd'
import SiderBar from './components/SiderBar'
import { useHistory } from 'react-router-dom'
import IRoute from '@/router/innerRouter/IRoute'
import initRoutes from '../../router/innerRouter/initRoutes'
import HeaderBar from './components/HeaderBar'
import TabBar from './components/TabBar'
import { useSelector } from 'react-redux'
import InnerRouter from '@/router/innerRouter'
import { userInfoSelector } from '@/redux/app/selectors'
const InnerLayout: React.FC = props => {
  const history = useHistory()
  // const Location = useLocation()
  const [collapse, setCollapse] = useState(false)
  const [routeMap, setRouteMap] = useState<IRoute[]>([])
  const userInfo = useSelector(userInfoSelector)
  if (!userInfo.permission) {
    userInfo.permission = ''
  }
  useEffect(() => {
    //检验登录态
    const token = userInfo.permission
    if (!token) {
      message.success('登录超时，请重新登录', 0.7).then(() => {
        history.replace('/login')
      })
    } else {
      setRouteMap(initRoutes(userInfo.permission.split(',')))
    }
  }, [])
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
