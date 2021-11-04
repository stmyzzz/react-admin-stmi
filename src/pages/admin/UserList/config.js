/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-02 14:43:02
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 10:52:47
 */
import { Button, Row, Tag } from 'antd'
import styles from './index.module.css'
import { formatTime } from '@/libs/utils'
export const userStatus = {
  0: '禁用',
  1: '启用'
}
export const userColumns = (handleRoleView, handleRoleDelete) => {
  return [
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      render: (text, record) => {
        return (
          <div>
            {`
      ${record.nameZh}(${record.nameEn})`}
          </div>
        )
      }
    },
    {
      title: '职位',
      dataIndex: 'jobName',
      key: 'jobName',
      render: (text, record) => {
        return <div>{record.jobName}</div>
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        return (
          <Tag color={record.status === 0 ? 'error' : 'success'}>
            {userStatus[record.status]}
          </Tag>
        )
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text, record) => {
        return <div>{formatTime(record.createdAt, 'YYYY-MM-DD HH:mm:ss')}</div>
      }
    },
    {
      title: '登录时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text, record) => {
        return <div>{formatTime(record.updatedAt, 'YYYY-MM-DD HH:mm:ss')}</div>
      }
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (text, record) => {
        return (
          <Row>
            <Button
              onClick={() => {
                handleRoleView(record)
              }}
              type='primary'
            >
              编辑
            </Button>
            <Button
              type='primary'
              className={styles.ml10}
              onClick={() => {
                handleRoleDelete(record)
              }}
            >
              删除
            </Button>
          </Row>
        )
      }
    }
  ]
}
