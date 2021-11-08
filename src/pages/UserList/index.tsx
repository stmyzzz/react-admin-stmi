/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 10:07:25
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 14:46:03
 */
import { Table, Modal, message } from 'antd'
import { useState, useEffect } from 'react'
import MainLayout from '@/components/MainLayout'
import AddUserModal from '@/containers/UserList/AddUserModal'
import UserSearch from '@/containers/UserList/UserSearch'
import { useSelector, useDispatch } from 'react-redux'
import {
  isLoadingUserListSelector,
  userListSelector
} from '@/redux/userList/selectors'
import { usePromise } from '@/hooks'
import * as R from 'ramda'
import { userColumns } from './config'
import { defaultPageConfig } from '@/config'
import { getUserListRequest, deleteUserRequest } from '@/redux/userList/actions'
const AdminList = () => {
  const [isShowAddModal, setShowAddModal] = useState(false)
  const [currentType, setCurrentType] = useState('')
  const dispatchPromise = usePromise()
  const [userItem, setUserItem] = useState({})
  const [searchFilter, setSearchFilter] = useState({})
  const dispatch = useDispatch()
  const isLoadingUserList = useSelector(isLoadingUserListSelector)
  const userList = useSelector(userListSelector)
  const handleUserSearch = (e: any) => {
    setSearchFilter(e)
  }
  const handleAddUser = (e: any) => {
    setCurrentType('add')
    setShowAddModal(true)
    setUserItem({})
  }
  const addUserModalClose = () => {
    setShowAddModal(false)
    getUserList()
  }
  const handleRoleView = (row: any) => {
    setShowAddModal(true)
    setCurrentType('edit')
    setUserItem(row)
  }
  const handlePageChange = (page: any) => {
    const pageNo = page.current
    const pageSize = page.pageSize
    getUserList(pageNo, pageSize)
  }
  const handleRoleDelete = (record: { id: number }) => {
    Modal.confirm({
      title: '提示',
      content: '确认要删除？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        const params = {
          id: record.id
        }
        dispatchPromise(deleteUserRequest(params)).then(res => {
          if (res.ret === 0) {
            message.success({
              content: '删除成功！',
              key: 'API_REQUEST'
            })
          } else {
            message.error({
              content: res.errmsg,
              key: 'API_REQUEST'
            })
          }
        })
      }
    })
  }
  const getUserList = (pageNo = 1, pageSize = defaultPageConfig.pageSize) => {
    const params = {
      ...searchFilter,
      page_no: pageNo,
      page_size: pageSize
    }
    dispatch(getUserListRequest(params))
  }
  useEffect(() => {
    getUserList()
  }, [])
  useEffect(() => {
    getUserList()
  }, [searchFilter])
  return (
    <MainLayout
      search={
        <UserSearch
          handleSearch={handleUserSearch}
          handleAddUser={handleAddUser}
        />
      }
    >
      <Table
        columns={userColumns(handleRoleView, handleRoleDelete)}
        rowKey={record => record.id}
        dataSource={R.pathOr([], ['data'], userList)}
        pagination={{
          current: R.pathOr(1, ['page_no'], userList),
          pageSize: R.pathOr(
            defaultPageConfig.pageSize,
            ['page_size'],
            userList
          ),
          total: R.pathOr(0, ['total'], userList),
          showSizeChanger: true,
          showTotal: total => `共${total}条记录`
        }}
        onChange={handlePageChange}
        loading={isLoadingUserList}
      ></Table>
      <AddUserModal
        visible={isShowAddModal}
        type={currentType}
        handleCancel={addUserModalClose}
        data={userItem}
      ></AddUserModal>
    </MainLayout>
  )
}
export default AdminList
