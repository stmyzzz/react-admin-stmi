/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 16:04:12
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 14:57:56
 */
import { Button } from 'antd'
import { formatTime } from '@/libs/utils'
import PermissionView from '@/components/PermissionView'
export const userColumns = handlePermissionView => {
  return [
    {
      title: '职位',
      dataIndex: 'jobName',
      key: 'jobName',
      render: (text, record) => {
        return <div>{record.jobName}</div>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text, record) => {
        return <div>{formatTime(record.createdAt, 'YYYY-MM-DD HH:mm:ss')}</div>
      }
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (text, record) => {
        return (
          <PermissionView authKey='editRole'>
            <Button
              type='primary'
              onClick={() => {
                handlePermissionView(record)
              }}
            >
              编辑
            </Button>
          </PermissionView>
        )
      }
    }
  ]
}

export const permissionShow = [
  {
    name: 'admin',
    title: '系统管理',
    key: 'admin',
    children: [
      {
        name: 'userAdmin',
        title: '用户管理',
        key: 'userAdmin',
        children: [
          { name: 'showUser', title: '查看列表', key: 'showUser' },
          { name: 'addUser', title: '添加用户', key: 'addUser' },
          { name: 'editUser', title: '编辑用户', key: 'editUser' },
          { name: 'deleteUser', title: '删除用户', key: 'deleteUser' }
        ]
      },
      {
        name: 'permissionAdmin',
        title: '权限管理',
        key: 'permissionAdmin',
        children: [
          { name: 'showRole', title: '查看列表', key: 'showRole' },
          { name: 'addRole', title: '添加角色', key: 'addRole' },
          { name: 'editRole', title: '编辑角色', key: 'editRole' }
        ]
      }
    ]
  },
  {
    name: 'panel',
    title: '汽车看板',
    key: 'panel',
    children: [
      {
        name: 'sellPanel',
        title: '销售',
        key: 'sellPanel'
      },
      {
        name: 'setPanel',
        title: '配置',
        key: 'setPanel'
      }
    ]
  },
  {
    name: 'car',
    title: '汽车',
    key: 'car',
    children: [
      {
        name: 'carList',
        title: '汽车列表',
        key: 'carList'
      },
      {
        name: 'setList',
        title: '配置列表',
        key: 'setList'
      }
    ]
  }
]
