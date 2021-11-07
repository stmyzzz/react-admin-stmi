/*
 * @Description:封装页面布局
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-19 14:19:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-06 16:46:22
 */

import styles from './index.module.css'
import { FC } from 'react'
export interface ITitleChildProps {
  title: string
  children: any
}
const TitleChild: FC<ITitleChildProps> = (props: ITitleChildProps) => {
  const { title, children } = props
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

export default TitleChild
