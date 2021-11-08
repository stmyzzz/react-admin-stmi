/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-29 13:52:29
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 13:50:49
 */
import MainLayout from '@/components/MainLayout'
import { Table, Button } from 'antd'
import { carColumns, typeColmns } from './config'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCarListRequest } from '@/redux/carList/actions'
import AddCarModal from '@/containers/CarList/AddCarModal'
import {
  carListSelector,
  isLoadingCarListSelector
} from '@/redux/carList/selectors'
import * as R from 'ramda'
import './index.css'
import { defaultPageConfig } from '@/config'
const expandedRowRender = (expended: any, record: any) => {
  console.log(`expended.types`, expended)
  return (
    <Table
      columns={typeColmns}
      dataSource={R.pathOr([], ['types'], expended)}
      pagination={false}
      rowKey={data => data.typeNumber}
    />
  )
}
const CarList = () => {
  const carList = useSelector(carListSelector)
  const [isShowAddModal, setShowAddModal] = useState(false)
  const [currentType, setCurrentType] = useState('')
  const [carItem, setCarItem] = useState({})
  const dispatch = useDispatch()
  const isLoadingCarList = useSelector(isLoadingCarListSelector)
  const handleEdit = (record: any, type: string) => {
    setCurrentType(type)
    setShowAddModal(true)
    setCarItem(record)
  }
  const addUserModalClose = () => {
    setShowAddModal(false)
    getCarList()
  }
  const getCarList = (pageNo = 1, pageSize = defaultPageConfig.pageSize) => {
    const params = {
      page_no: pageNo,
      page_size: pageSize
    }
    dispatch(getCarListRequest(params))
  }
  const handlePageChange = (page: any) => {
    const pageNo = page.current
    const pageSize = page.pageSize
    getCarList(pageNo, pageSize)
  }
  useEffect(() => {
    getCarList()
  }, [])
  return (
    <MainLayout>
      <div className='addCar'>
        <Button
          onClick={() => {
            handleEdit({}, 'add')
          }}
          type='primary'
        >
          添加车型
        </Button>
      </div>
      <div className='carTable'>
        <Table
          columns={carColumns(handleEdit)}
          dataSource={R.pathOr([], ['data'], carList)}
          rowKey={data => data.id}
          expandable={{ expandedRowRender }}
          pagination={{
            current: R.pathOr(1, ['page_no'], carList),
            pageSize: R.pathOr(
              defaultPageConfig.pageSize,
              ['page_size'],
              carList
            ),
            total: R.pathOr(0, ['total'], carList),
            showSizeChanger: true,
            showTotal: total => `共${total}条记录`
          }}
          onChange={handlePageChange}
          loading={isLoadingCarList}
        ></Table>
      </div>
      <AddCarModal
        visible={isShowAddModal}
        type={currentType}
        handleCancel={addUserModalClose}
        data={carItem}
      ></AddCarModal>
    </MainLayout>
  )
}
export default CarList
