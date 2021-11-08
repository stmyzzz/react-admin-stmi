/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-29 13:52:36
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 16:49:19
 */
import MainLayout from '@/components/MainLayout'
import { Card, Row, Col, Button } from 'antd'
import { Image } from 'antd'
import { EditFilled } from '@ant-design/icons'
import EditCarModal from '@/containers/SetList/EditSetModal'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSetListSelectors,
  isLoaidngSetListSelectors
} from '@/redux/setList/selectors'
import { getSetListRequest } from '@/redux/setList/actions'
const SetList = () => {
  const dispatch = useDispatch()
  const setList = useSelector(getSetListSelectors)
  const [isShowEditCarModal, setIsShowEditCarModal] = useState<boolean>(false)
  const isLoaidngSetList = useSelector(isLoaidngSetListSelectors)
  const [currentType, setCurrentType] = useState('')
  const [setItem, setSetItem] = useState<any>()
  const editCarModalClose = () => {
    setIsShowEditCarModal(false)
    getSetList()
  }
  const getSetList = () => {
    dispatch(getSetListRequest())
  }
  useEffect(() => {
    getSetList()
  }, [])
  const editCarModal = (data: any) => {
    setIsShowEditCarModal(true)
    setSetItem(data)
    setCurrentType('edit')
  }
  const handleSet = () => {
    setIsShowEditCarModal(true)
    setCurrentType('add')
    setSetItem({})
  }
  return (
    <MainLayout>
      <div className='addBtn'>
        <Button type='primary' onClick={handleSet}>
          添加车型
        </Button>
      </div>
      <Row gutter={20} style={{ marginTop: '20px' }}>
        {setList.map((item: any, index: number) => {
          return (
            <Col
              key={item.id}
              style={index > 2 ? { marginTop: '20px' } : {}}
              span={8}
            >
              <Card
                hoverable={true}
                title={item.carName}
                loading={isLoaidngSetList}
                style={{ height: '100%' }}
                extra={
                  <EditFilled
                    onClick={() => {
                      editCarModal(item)
                    }}
                  />
                }
                bordered={false}
              >
                <Image src={item.imgUrl[0]} preview={false} />
              </Card>
            </Col>
          )
        })}
      </Row>
      <EditCarModal
        visible={isShowEditCarModal}
        handleCancel={editCarModalClose}
        type={currentType}
        data={setItem}
      ></EditCarModal>
    </MainLayout>
  )
}
export default SetList
