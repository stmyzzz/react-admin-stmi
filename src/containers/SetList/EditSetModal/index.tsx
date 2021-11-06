/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 21:07:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-06 14:40:31
 */
import { Modal, Upload, message, Button } from 'antd'
import React, { FC, useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

export interface IEditSetModalProps {
  type: string
  data?: any
  visible: boolean
  handleCancel: () => void
}
const EditSetModal: FC<IEditSetModalProps> = (props: IEditSetModalProps) => {
  const { type, visible, handleCancel } = props
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const [previewImg, setPreviewImg] = useState('')
  const imgRef = React.useRef()
  const handleSubmit = () => {
    console.log('ok')
  }
  const uploaderProps = {
    name: 'avatar',
    action: 'http://112.74.56.190:3000/upload',
    showUploadList: true,
    onChange(info: any) {
      console.log(`info`, info)
      if (info.file.status === 'uploading' && info.file.percent === 0) {
        message.loading('图片上传中...', 5000)
      } else if (info.file.status === 'done') {
        message.destroy()
        if (info.file?.response?.ret === 0) {
          // imgRef.current.src = previewImg
          // form.setFieldsValue({
          //   image_path: info.file?.response?.data?.fileName
          // })
          message.success(`图片上传成功`)
        } else {
          message.error(`图片上传失败`)
        }
      } else if (info.file.status === 'error') {
        message.destroy()
        message.error(`${info.file.name} 上传失败`)
      }
    }
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <Modal
      title={type === 'add' ? '添加' : '配置'}
      visible={visible}
      width='900px'
      onCancel={handleCancel}
      onOk={handleSubmit}
      destroyOnClose={true}
      confirmLoading={loading}
    >
      <Upload {...uploaderProps}>
        <Button type='primary'>上传图片</Button>
      </Upload>
    </Modal>
  )
}

export default EditSetModal
