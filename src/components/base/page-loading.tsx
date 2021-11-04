/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-26 11:31:09
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 15:31:16
 */
import React from 'react'
import { Spin } from 'antd'

const loadingWrap: React.CSSProperties = {
  paddingTop: '300px',
  textAlign: 'center'
}

const PageLoading: React.FC = () => {
  return (
    <div style={loadingWrap}>
      <Spin size='large' />
    </div>
  )
}
export default PageLoading
