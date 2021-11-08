/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 21:07:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 14:40:58
 */
import {
  Modal,
  Upload,
  message,
  Col,
  Form,
  Input,
  Row,
  Checkbox,
  Divider
} from 'antd'
import React, { FC, useState, useEffect } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import TitleChid from '@/components/TitleChild'
import { addSetRequest, updateSetRequest } from '@/redux/setList/actions'
import { usePromise } from '@/hooks'
const CheckboxGroup = Checkbox.Group
export interface IEditSetModalProps {
  type: string
  data?: any
  visible: boolean
  handleCancel: () => void
}
// function getBase64(file: any) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve(reader.result)
//     reader.onerror = error => reject(error)
//   })
// }
const plainOptions = [
  '亚米级高精定位系统',
  '赋值辅助驾驶模拟显示系统',
  'ACC全速自适应巡航系统'
]

const EditSetModal: FC<IEditSetModalProps> = (props: IEditSetModalProps) => {
  const { type, visible, handleCancel, data } = props
  const [loading, setLoading] = useState(false)
  const [modalLoading, setmModalLoading] = useState(false)
  const dispatchPromise = usePromise()
  // const [imageUrl, setImageUrl] = useState()
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkedList, setCheckedList] = useState<any>(undefined)
  const [checkAll, setCheckAll] = useState(false)
  const [fileList, setFileList] = useState<any>([])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [form] = Form.useForm()
  console.log(`data`, data)
  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  useEffect(() => {
    if (visible) {
      form.resetFields()
      if (type === 'edit') {
        const {
          carName,
          size,
          axisStance,
          wheelStance,
          seatNumber,
          setSystem
        } = data
        form.setFieldsValue({
          carName,
          size,
          axisStance,
          wheelStance,
          seatNumber
        })
        setCheckedList(setSystem)
        const arr = data.imgUrl.map((item: any, index: any) => {
          return { uid: index, url: item, response: { path: item } }
        })
        setFileList(arr)
      } else {
        setFileList([])
        setCheckedList([])
      }
    }
  }, [data])
  const onChange = (list: any) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }
  const handleSubmit = () => {
    form.validateFields().then((values: any) => {
      console.log(`vlaues`, values)
      if (fileList.length === 0) {
        message.warning('至少需要上传一张图片')
        return
      }
      console.log(`表单的fileList`, fileList)
      const fileParams = fileList.map((item: any) => {
        const {
          response: { path }
        } = item
        return path
      })
      const params = { imgUrl: fileParams, ...values, setSystem: checkedList }
      if (type === 'edit') {
        params.id = data.id
      }
      dispatchPromise(
        type === 'add' ? addSetRequest(params) : updateSetRequest(params)
      )
        .then(res => {
          if (res.ret === 0) {
            message.success({
              content: '保存成功！',
              key: 'API_REQUEST'
            })
            handleCancel()
          } else {
            message.error({
              content: res.errmsg,
              key: 'API_REQUEST'
            })
          }
        })
        .finally(() => {
          setmModalLoading(false)
        })
    })
  }
  const handleCancelImage = () => {
    setPreviewVisible(false)
  }
  const uploaderProps = {
    name: 'avatar',
    action: 'http://112.74.56.190:3000/upload',
    beforeUpload: (file: any) => {
      console.log(`file`, file)
      if (file.size >= 1024 * 1024) {
        message.error(`${file.name} 文件过大`)
      }
      if (
        file.type !== 'image/png' &&
        file.type !== 'image/jpg' &&
        file.type !== 'image/jpeg'
      ) {
        message.error('请上传png/jpg/jpeg格式的图片')
      }
      return file.type === 'image/png' ||
        file.type === 'image/jpg' ||
        file.type === 'image/jpeg'
        ? true
        : Upload.LIST_IGNORE
    },
    onPreview(file: any) {
      const {
        response: { path = '' }
      } = file
      setPreviewImage(path)
      setPreviewVisible(true)
    },
    onChange(props: any) {
      const { fileList } = props
      setFileList(fileList)
    },
    onRemove(props: any) {
      if (fileList.length <= 1) {
        message.warning('最少需要一张图片')
        return false
      }
      return true
    }
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传图片</div>
    </div>
  )

  return (
    <Modal
      title={type === 'add' ? '添加车型' : '配置车型'}
      visible={visible}
      width='900px'
      onCancel={handleCancel}
      onOk={handleSubmit}
      destroyOnClose={true}
      confirmLoading={modalLoading}
    >
      <TitleChid title='上传车型照片'>
        <Upload
          accept='png,jpg'
          listType='picture-card'
          className='avatar-uploader'
          {...uploaderProps}
          defaultFileList={fileList}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
      </TitleChid>
      <Form form={form}>
        <TitleChid title='车型'>
          <Form.Item
            name='carName'
            rules={[{ required: true, message: '请输入车型' }]}
          >
            <Input disabled={type === 'edit'} placeholder='请输入车型' />
          </Form.Item>
        </TitleChid>
        <TitleChid title='规格参数'>
          <Row gutter={20}>
            <Col span={10}>
              <Form.Item
                label='长/宽/高'
                name='size'
                rules={[{ required: true, message: '请输入长/宽/高' }]}
              >
                <Input placeholder='请按/隔开' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                rules={[{ required: true, message: '请输入轴距' }]}
                label='轴距'
                name='axisStance'
              >
                <Input placeholder='请输入轴距' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                rules={[{ required: true, message: '请输入轮距' }]}
                label='轮距 - 前/后'
                name='wheelStance'
              >
                <Input placeholder='请输入轮距 - 前/后' />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                rules={[{ required: true, message: '请输入座位数' }]}
                label='座位数'
                name='seatNumber'
              >
                <Input placeholder='请输入座位数' />
              </Form.Item>
            </Col>
          </Row>
        </TitleChid>
        <TitleChid title='系统配置'>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            全选
          </Checkbox>
          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </TitleChid>
      </Form>

      <Modal
        visible={previewVisible}
        title='911'
        footer={null}
        onCancel={handleCancelImage}
      >
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </Modal>
  )
}

export default EditSetModal
