/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-29 17:11:16
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 17:12:23
 */
import { Tabs } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTag, removeTag, setActiveTag } from '@/redux/app/actions'
import { useEffect } from 'react'
import { tagsSelector, activeTagSelector } from '@/redux/app/selectors'
import styles from './index.module.css'
import usePrevious from '@/hooks/usePrevious'
const { TabPane } = Tabs
const TabBar = () => {
  const tags = useSelector(tagsSelector)
  const activeTag = useSelector(activeTagSelector)
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const prevActiveTag = usePrevious(activeTag)
  useEffect(() => {
    dispatch(addTag(location.pathname))
    history.push(location.pathname)
    dispatch(setActiveTag(location.pathname))
  }, [location.pathname])
  const onEdit = (e: any): void => {
    dispatch(removeTag(e))
  }
  const onChange = (pathname: string) => {
    history.push(pathname)
  }
  useEffect(() => {
    // tag和pathname不一致就跳转
    if (prevActiveTag !== activeTag) {
      history.push(activeTag)
    }
  }, [activeTag, prevActiveTag, tags])
  return (
    <div
      className='tabs'
      style={{
        marginLeft: '10px'
      }}
    >
      <div className={styles.tabs}>
        <Tabs
          size='small'
          onEdit={onEdit}
          tabBarGutter={5}
          hideAdd
          type='editable-card'
          activeKey={activeTag}
          onChange={onChange}
        >
          <TabPane key='/' tab={<div>首页</div>} closable={false} />
          {tags.map((tag: { title: string; pathname: string }) => (
            <TabPane key={tag.pathname} tab={<div>{tag.title}</div>} />
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default TabBar
