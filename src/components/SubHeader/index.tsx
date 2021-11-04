/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-19 14:01:53
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 15:31:29
 */
import { FC, ReactNode } from 'react'
import { PageHeader } from 'antd'
export interface ISubHeaderProps {
  title: string
  action?: ReactNode
  content?: FC
}
const subHeader: FC<ISubHeaderProps> = (props: ISubHeaderProps) => {
  const { title, action, content } = props
  return (
    <PageHeader
      className='page-header'
      title={title}
      extra={<div>{action}</div>}
    >
      {content}
    </PageHeader>
  )
}

export default subHeader
