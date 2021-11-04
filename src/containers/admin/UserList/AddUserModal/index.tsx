/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 11:02:38
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-04 10:08:38
 */
import { Modal, Form, Radio, Select, Input, message } from 'antd'
import { FC, useEffect, useState } from 'react'
import * as R from 'ramda'
import { roleListSelector } from '@/redux/admin/role/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { getRoleListRequest } from '@/redux/admin/role/actions'
import { addUserRequest, updateUserRequest } from '@/redux/admin/user/actions'
import { usePromise } from '@/hooks'
const { Option } = Select
export interface IAddUserModalProps {
  data?: any
  type: string
  visible: boolean
  handleCancel: any
}
const AddUserModal: FC<IAddUserModalProps> = (props: IAddUserModalProps) => {
  const { data, type, visible, handleCancel } = props
  const dispatchPromise = usePromise()
  const [form] = Form.useForm()
  const permissionList = useSelector(roleListSelector)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    form.validateFields().then((values: any) => {
      console.log(`values`, values)
      const params = {
        ...values
      }
      if (type === 'edit') {
        params.id = data.id
      }
      setLoading(true)
      dispatchPromise(
        type === 'add' ? addUserRequest(params) : updateUserRequest(params)
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
          setLoading(false)
        })
    })
  }
  useEffect(() => {
    dispatch(getRoleListRequest())
  }, [])
  return (
    <Modal
      title={type === 'add' ? '添加用户' : '编辑用户'}
      visible={visible}
      width='700px'
      onCancel={handleCancel}
      destroyOnClose={true}
      onOk={handleSubmit}
      confirmLoading={loading}
    >
      <Form name='userForm' form={form} preserve={false} autoComplete='off'>
        <Form.Item
          label='中文名'
          name='nameZh'
          rules={[{ required: true, message: '请输入中文名' }]}
          initialValue={R.pathOr('', ['nameZh'], data)}
        >
          <Input maxLength={10} placeholder='请输入中文名' />
        </Form.Item>
        <Form.Item
          label='英文名'
          name='nameEn'
          rules={[{ required: true, message: '请输入英文名' }]}
          initialValue={R.pathOr('', ['nameEn'], data)}
        >
          <Input maxLength={10} placeholder='请输入英文名' />
        </Form.Item>
        <Form.Item
          label='职位'
          name='jobName'
          rules={[{ required: true, message: '请选择职位' }]}
          initialValue={R.pathOr(undefined, ['jobName'], data)}
        >
          <Select style={{ width: '100%' }} placeholder='请选择职位'>
            {R.pathOr([], ['data'], permissionList).map(
              (item: { id: number; jobName: string }) => {
                return (
                  <Option key={item.id} value={item.jobName}>
                    {item.jobName}
                  </Option>
                )
              }
            )}
          </Select>
        </Form.Item>
        <Form.Item
          label='状态'
          name='status'
          initialValue={R.pathOr('', ['status'], data)}
          rules={[{ required: true, message: '请选择状态' }]}
        >
          <Radio.Group>
            <Radio value={1}>启用</Radio>
            <Radio value={0}>禁用</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddUserModal
