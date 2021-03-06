/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 10:06:27
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 13:53:05
 */
import MainLayout from '@/components/MainLayout'
import { Button, Table } from 'antd'
import AddRoleModal from '@/containers/RoleList/AddRoleModal'
import { useState, useEffect } from 'react'
import { userColumns } from './config'
import * as R from 'ramda'
import { useSelector, useDispatch } from 'react-redux'
import {
  isLoadingRoleListSelector,
  roleListSelector
} from '@/redux/roleList/selectors'
import './index.css'
import { getRoleListRequest } from '@/redux/roleList/actions'
import { defaultPageConfig } from '@/config'
import PermissionView from '@/components/PermissionView'
export const RoleList = () => {
  const [isShowRoleModal, setIsShowRoleModal] = useState(false)
  const [currentType, setCurrentType] = useState('')
  const isLoadingRoleList = useSelector(isLoadingRoleListSelector)
  const [RoleItem, setRoleItem] = useState<any>()
  const dispatch = useDispatch()
  const roleList = useSelector(roleListSelector)
  const handleAddRole = () => {
    setIsShowRoleModal(true)
    setCurrentType('add')
    setRoleItem({})
  }
  const handleAddRoleModalClose = () => {
    setIsShowRoleModal(false)
    getRoleList()
  }
  const handlePermissionView = (record: { permission: any }) => {
    setCurrentType('edit')
    setIsShowRoleModal(true)
    setRoleItem(record)
  }
  const getRoleList = (pageNo = 1, pageSize = defaultPageConfig.pageSize) => {
    const params = {
      page_no: pageNo,
      page_size: pageSize
    }
    dispatch(getRoleListRequest(params))
  }
  const handlePageChange = (page: any) => {
    const pageNo = page.current
    const pageSize = page.pageSize
    getRoleList(pageNo, pageSize)
  }
  useEffect(() => {
    getRoleList()
  }, [])
  return (
    <MainLayout>
      <div className='add-btn'>
        <PermissionView authKey='addRole'>
          <Button onClick={handleAddRole} type='primary'>
            添加角色
          </Button>
        </PermissionView>
      </div>
      <Table
        className='roleTable'
        columns={userColumns(handlePermissionView)}
        rowKey={record => record.id}
        dataSource={R.pathOr([], ['data'], roleList)}
        pagination={{
          current: R.pathOr(1, ['page_no'], roleList),
          pageSize: R.pathOr(
            defaultPageConfig.pageSize,
            ['page_size'],
            roleList
          ),
          total: R.pathOr(0, ['total'], roleList),
          showSizeChanger: true,
          showTotal: total => `共${total}条记录`
        }}
        onChange={handlePageChange}
        loading={isLoadingRoleList}
      ></Table>
      <AddRoleModal
        visible={isShowRoleModal}
        type={currentType}
        handleCancel={handleAddRoleModalClose}
        data={RoleItem}
      ></AddRoleModal>
    </MainLayout>
  )
}

export default RoleList
