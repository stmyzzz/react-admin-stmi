/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-04 17:26:18
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-06 18:26:09
 */
import {
  Modal,
  Form,
  Select,
  Input,
  message,
  Space,
  Button,
  DatePicker,
  InputNumber
} from 'antd'
import { sellStatus } from '@/pages/CarList/config'
import { FC, useEffect, useState } from 'react'
import * as R from 'ramda'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import { addCarRequest, updateCarRequest } from '@/redux/carList/actions'
import { usePromise } from '@/hooks'
const { RangePicker } = DatePicker
const { Option } = Select
export interface IAddCarModal {
  data?: any
  type: string
  visible: boolean
  handleCancel: any
}
const areas = [
  { label: '北京', value: '1001' },
  { label: '广州', value: '1002' },
  { label: '深圳', value: '1003' }
]

const AddCarModal: FC<IAddCarModal> = (props: IAddCarModal) => {
  const { data, type, visible, handleCancel } = props
  const dispatchPromise = usePromise()
  const [form] = Form.useForm()
  console.log(`data`, data)
  useEffect(() => {
    if (visible) {
      if (type === 'add') {
        form.setFieldsValue({
          sellCity: undefined
        })
      } else {
        form.setFieldsValue({
          ...data,
          sellCity: data.sellCity.split(','),
          openCityTime: [
            moment(data.openCityTime[0], 'YYYY-MM-DD'),
            moment(data.openCityTime[1], 'YYYY-MM-DD')
          ]
        })
      }

      console.log(`object`, form)
    }
  }, [data])
  const onFinish = (record: any) => {
    form.validateFields().then((values: any) => {
      console.log(`传递的参数`, values)
      if (!values.types || values.types.length === 0) {
        message.error('至少输入一个车型')
        return
      }
      const params = {
        id: data.id,
        ...values,
        sellCity: values.sellCity.join(',')
      }
      dispatchPromise(
        type === 'add' ? addCarRequest(params) : updateCarRequest(params)
      )
        .then(res => {
          if (res.ret === 0) {
            message.success({
              content: '提交成功！',
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
          // setLoading(false)
        })
      console.log(`传递的参数params`, params)
    })
  }
  const handleChange = (e: any) => {
    console.log('handleSubmit')
  }

  return (
    <Modal
      title={type === 'add' ? '添加用户' : '编辑用户'}
      visible={visible}
      width='800px'
      onCancel={handleCancel}
      destroyOnClose={true}
      onOk={onFinish}
      forceRender={true}
    >
      <Form form={form} name='carForm' autoComplete='off'>
        <Form.Item
          label='车型'
          name='carType'
          rules={[{ required: true, message: '请输入车型' }]}
        >
          <Input maxLength={10} placeholder='请输入车型' />
        </Form.Item>
        <Form.Item
          name='sellCity'
          label='销售城市'
          rules={[{ required: true, message: '请输入销售城市' }]}
        >
          <Select
            mode='multiple'
            allowClear
            placeholder='请输入销售城市'
            options={areas}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name='openCityTime'
          label='上市时间'
          rules={[{ required: true, message: '请输入上市时间' }]}
        >
          <RangePicker
            format='YYYY-MM-DD'
            placeholder={['开始时间', '结束时间']}
          />
        </Form.Item>
        <Form.Item
          label='价格'
          name='priceRange'
          initialValue={R.pathOr('', ['priceRange'], data)}
        >
          <Input disabled placeholder='请输入价格' />
        </Form.Item>
        <Form.List name='types'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} wrap={true} align='baseline'>
                  <Form.Item
                    {...field}
                    label='型号'
                    name={[field.name, 'typeNumber']}
                    fieldKey={[field.fieldKey, 'typeNumber']}
                    rules={[{ required: true, message: '请输入型号' }]}
                  >
                    <Input allowClear />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label='最大功率'
                    name={[field.name, 'maxPower']}
                    fieldKey={[field.fieldKey, 'maxPower']}
                    rules={[{ required: true, message: 'Missing price' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label='百公里加速'
                    name={[field.name, 'hundredSpeed']}
                    fieldKey={[field.fieldKey, 'hundredSpeed']}
                    rules={[{ required: true, message: 'Missing price' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <p>秒</p>
                  <Form.Item
                    {...field}
                    label='最高时速'
                    name={[field.name, 'maxSpeed']}
                    fieldKey={[field.fieldKey, 'maxSpeed']}
                    rules={[{ required: true, message: 'Missing price' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <p>km/h</p>

                  <Form.Item
                    {...field}
                    label='价格'
                    name={[field.name, 'typePrice']}
                    fieldKey={[field.fieldKey, 'typePrice']}
                    rules={[{ required: true, message: 'Missing price' }]}
                  >
                    <Input allowClear />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label='状态'
                    name={[field.name, 'status']}
                    style={{ width: '150px' }}
                    fieldKey={[field.fieldKey, 'status']}
                    rules={[{ required: true, message: '请选择状态' }]}
                  >
                    <Select>
                      {Object.keys(sellStatus).map(item => {
                        return (
                          <Option key={item} value={Number(item)}>
                            {sellStatus[item]}
                          </Option>
                        )
                      })}
                    </Select>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type='dashed'
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  添加车型配置
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  )
}

export default AddCarModal
