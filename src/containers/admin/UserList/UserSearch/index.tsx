/*
 * @Description:用户列表-搜索
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 10:33:05
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 09:38:37
 */
import { FC, useState } from 'react'
import { Button, Input, Row, Col } from 'antd'
import styles from '@/pages/admin/UserList/index.module.css'
interface IUserSearchProps {
  handleSearch: (e: any) => void
  handleAddUser: (e: any) => void
}
const UserSearch: FC<IUserSearchProps> = props => {
  const { handleSearch, handleAddUser } = props
  const [searchFilter, setSearchFilter] = useState<string>('')

  const handleUserSearch = () => {
    handleSearch({
      name: searchFilter
    })
  }
  return (
    <div className={styles.searchBar}>
      <Row gutter={[20, 8]}>
        <Col>
          <Input
            placeholder='输入中/英文名'
            style={{ width: '100%' }}
            onChange={(e: any) => setSearchFilter(e.target.value)}
            allowClear
          />
        </Col>
        <Col>
          <Button onClick={handleUserSearch} type='primary'>
            查询
          </Button>
        </Col>
        <Col>
          <Button onClick={handleAddUser} type='primary'>
            添加人员
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default UserSearch
