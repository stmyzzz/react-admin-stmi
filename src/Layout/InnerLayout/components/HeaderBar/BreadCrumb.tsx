/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-29 15:16:28
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-01 17:25:28
 */
import React from 'react'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { routes } from '@/router/innerRouter/Routes'
import _ from 'lodash'
const Breadcrumb = withRouter(props => {
  let b: Array<Object> = []
  routes.forEach((it: any) => {
    b.push(_.pick(it, 'path', 'title'))
    if (it.children) {
      it.children.map((child: any) => {
        b.push(_.pick(child, 'path', 'title'))
      })
    }
  })
  const breadcrumbNameMap = {}
  b.forEach((e: any) => {
    breadcrumbNameMap[e.path] = e.title
  })
  const { location } = props
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <AntdBreadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </AntdBreadcrumb.Item>
    )
  })
  const breadcrumbItems = [
    <AntdBreadcrumb.Item key='home'>
      <Link to='/'>首页</Link>
    </AntdBreadcrumb.Item>
  ].concat(extraBreadcrumbItems)
  return (
    <AntdBreadcrumb style={{ margin: '20px 10px' }}>
      {breadcrumbItems}
    </AntdBreadcrumb>
  )
})

export default Breadcrumb
