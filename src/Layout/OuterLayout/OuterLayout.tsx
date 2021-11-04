/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 10:49:49
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 14:22:19
 */
import { Form, Row, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'
const OuterLayout = () => {
  const history = useHistory()
  const onFinish = (e: any) => {
    history.push('/')
  }
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>react supcar admin 🚗</div>
        <Form
          name='basic'
          className={styles.form}
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <p className={styles.title}>欢迎登录</p>
          <Form.Item
            name='username'
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              style={{ width: '300px' }}
              placeholder='请输入用户名admin'
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              style={{ width: '300px' }}
              placeholder='请输入密码123456'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Button
            style={{ marginTop: '10px' }}
            type='primary'
            htmlType='submit'
            block
          >
            登录
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default OuterLayout
