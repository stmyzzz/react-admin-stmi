/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-29 13:52:36
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 22:08:51
 */
import MainLayout from '@/components/MainLayout'
import { Card, Row, Col } from 'antd'
import { Image } from 'antd'
import { EditFilled } from '@ant-design/icons'
import EditCarModal from '@/containers/SetList/EditSetModal'
import { useState } from 'react'
const SetList = () => {
  const [isShowEditCarModal, setIsShowEditCarModal] = useState<boolean>(false)
  const [currentType, setCurrentType] = useState('')
  const [setItem, setSetItem] = useState()
  const editCarModalClose = () => {
    setIsShowEditCarModal(false)
  }
  const editCarModal = () => {
    setIsShowEditCarModal(true)
  }
  return (
    <MainLayout>
      <Row gutter={20}>
        <Col span={8}>
          <Card
            title='911'
            extra={<EditFilled onClick={editCarModal} />}
            bordered={false}
          >
            <Image
              src='https://files.porsche.cn/filestore/image/multimedia/none/992-c2-modelimage-sideshot/model/5d3635ab-d97f-11eb-80d9-005056bbdc38;sN;twebp/porsche-model.webp'
              width={'100%'}
              preview={false}
            />
          </Card>
        </Col>
        <Col span={8} style={{}}>
          <Card title='718' bordered={false}>
            <Image
              src='https://files.porsche.cn/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/model/1b1b5cb6-e874-11ea-80cd-005056bbdc38;sN;twebp/porsche-model.webp'
              width={'100%'}
              preview={false}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title='panamera' bordered={false}>
            <Image
              src='https://files.porsche.cn/filestore/image/multimedia/none/carrange-flyout-718/thumbnail/f45e2ee9-2012-11ea-80c6-005056bbdc38;sS;twebp/porsche-thumbnail.webp'
              width={'100%'}
              preview={false}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title='panamera' bordered={false}>
            <Image
              src='https://files.porsche.cn/filestore/image/multimedia/none/carrange-flyout-718/thumbnail/f45e2ee9-2012-11ea-80c6-005056bbdc38;sS;twebp/porsche-thumbnail.webp'
              width={'100%'}
              preview={false}
            />
          </Card>
        </Col>
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
