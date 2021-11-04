/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-02 10:06:27
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 09:55:07
 */
import MainLayout from '@/components/MainLayout'
import { Button, Table } from 'antd'
import AddPermissionModa from '@/containers/admin/RoleList/AddRoleModal'
import { useState, useEffect } from 'react'
import { userColumns } from './config'
import * as R from 'ramda'
import { useSelector, useDispatch } from 'react-redux'
import {
  isLoadingPermissionListSelector,
  permissionListSelector
} from '@/redux/admin/role/selectors'
import { getPermissionListRequest } from '@/redux/admin/role/actions'
import { defaultPageConfig } from '@/config'
export const RoleList = () => {
  const [isShowRoleModal, setIsShowRoleModal] = useState(false)
  const [currentType, setCurrentType] = useState('')
  const isLoadingPermissionList = useSelector(isLoadingPermissionListSelector)
  const [permissionItem, setPermissionItem] = useState<any>()
  const dispatch = useDispatch()
  const permissionList = useSelector(permissionListSelector)
  const handleAddRole = () => {
    setIsShowRoleModal(true)
    setCurrentType('add')
    setPermissionItem({})
  }
  const handleAddRoleModalClose = () => {
    setIsShowRoleModal(false)
  }
  const handlePermissionView = (record: { permission: any }) => {
    setCurrentType('edit')
    setIsShowRoleModal(true)

    setPermissionItem(record)
  }
  const getPermissionList = (
    pageNo = 1,
    pageSize = defaultPageConfig.pageSize
  ) => {
    const params = {
      page_no: pageNo,
      page_size: pageSize
    }
    dispatch(getPermissionListRequest(params))
  }
  const handlePageChange = (page: any) => {
    const pageNo = page.current
    const pageSize = page.pageSize
    getPermissionList(pageNo, pageSize)
  }
  useEffect(() => {
    getPermissionList()
  }, [])
  return (
    <MainLayout>
      <div className='add-btn'>
        <Button onClick={handleAddRole} type='primary'>
          添加角色
        </Button>
      </div>
      <Table
        columns={userColumns(handlePermissionView)}
        rowKey={record => record.id}
        dataSource={R.pathOr([], ['data'], permissionList)}
        pagination={{
          current: R.pathOr(1, ['page_no'], permissionList),
          pageSize: R.pathOr(
            defaultPageConfig.pageSize,
            ['page_size'],
            permissionList
          ),
          total: R.pathOr(0, ['total'], permissionList),
          showSizeChanger: true,
          showTotal: total => `共${total}条记录`
        }}
        onChange={handlePageChange}
        loading={isLoadingPermissionList}
      ></Table>
      <AddPermissionModa
        visible={isShowRoleModal}
        type={currentType}
        handleCancel={handleAddRoleModalClose}
        data={permissionItem}
      ></AddPermissionModa>
    </MainLayout>
  )
}

export default RoleList
