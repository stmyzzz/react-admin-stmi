/*
 * @Description:封装页面布局
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-19 14:19:42
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 14:54:23
 */

import { Layout } from 'antd'
import styles from './index.module.css'
import { FC, ReactNode } from 'react'
const { Content } = Layout
export interface IMainLayoutProps {
  subHeader?: ReactNode
  search?: ReactNode
  children: any
}
const MainLayout: FC<IMainLayoutProps> = (props: IMainLayoutProps) => {
  const { subHeader, search, children } = props
  return (
    <Layout>
      <Content className={styles.content}>
        {subHeader}
        {search && <div className={styles.search}>{search}</div>}
        {children}
      </Content>
    </Layout>
  )
}

export default MainLayout
