/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 10:49:49
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 14:45:43
 */
import { Form, message, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'
import { usePromise } from '@/hooks'
import { useDispatch } from 'react-redux'
import { loginRequest, setUserInfo } from '@/redux/app/actions'
const OuterLayout = () => {
  const dispatchPromise = usePromise()
  const history = useHistory()
  const dispatch = useDispatch()
  const onFinish = (e: any) => {
    const { username, password } = e
    const params = {
      username,
      password
    }
    dispatchPromise(loginRequest(params)).then(res => {
      if (res.ret === 0) {
        const { userInfo } = res
        message.success({
          content: '登录成功！',
          key: 'API_REQUEST'
        })
        dispatch(setUserInfo(userInfo))
        history.push('/')
      } else {
        message.error({
          content: res.errmsg,
          key: 'API_REQUEST'
        })
      }
    })
  }
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>react admin stmi 🚗</div>
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
