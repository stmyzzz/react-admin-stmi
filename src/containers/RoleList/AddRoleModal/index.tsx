/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 11:02:38
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 14:39:47
 */
import { Modal, Form, Tree, Input, message } from 'antd'
import { FC, useEffect, useState } from 'react'
import * as R from 'ramda'
import { permissionShow } from '@/pages/RoleList/config'
import { usePromise } from '@/hooks'
import { addRoleRequest, updateRoleRequest } from '@/redux/role/actions'

export interface IAddRoleModal {
  data?: any
  type: string
  visible: boolean
  handleCancel: any
}
const AddUserModal: FC<IAddRoleModal> = (props: IAddRoleModal) => {
  const dispatchPromise = usePromise()
  const { data, type, visible, handleCancel } = props
  const [form] = Form.useForm()
  const [checkedKeys, setCheckedKeys] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    form.validateFields().then((values: any) => {
      console.log(`values`, values)
      const params = {
        id: data.id,
        ...values,
        permission: checkedKeys.join(',')
      }
      if (type === 'edit') {
        delete params.jobName
      }
      setLoading(true)
      dispatchPromise(
        type === 'add' ? addRoleRequest(params) : updateRoleRequest(params)
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
    if (type === 'edit') {
      setCheckedKeys(data?.permission.split(','))
    } else {
      setCheckedKeys([])
    }
  }, [data])
  const onCheck = (checkedKeys: any, info: any) => {
    let checkedKey = checkedKeys
    setCheckedKeys(checkedKey)
    console.log(`checkedKeys`, checkedKeys)
  }
  return (
    <Modal
      title={type === 'add' ? '添加角色' : '编辑角色'}
      visible={visible}
      width='700px'
      onCancel={handleCancel}
      destroyOnClose={true}
      onOk={handleSubmit}
      confirmLoading={loading}
    >
      <Form name='userForm' form={form} preserve={false} autoComplete='off'>
        <Form.Item
          label='角色名'
          name='jobName'
          initialValue={R.pathOr('', ['jobName'], data)}
          rules={[{ required: true, message: '请输入角色名' }]}
        >
          <Input disabled={type === 'edit'}></Input>
        </Form.Item>
        <div>
          <Tree
            checkable
            multiple
            treeData={permissionShow}
            checkedKeys={checkedKeys}
            onCheck={onCheck}
          />
        </div>
      </Form>
    </Modal>
  )
}

export default AddUserModal
