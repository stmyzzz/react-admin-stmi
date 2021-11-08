/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-26 12:43:14
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 17:11:23
 */
import MainLayout from '@/components/MainLayout'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@/redux/app/selectors'
import './index.css'
const Home = () => {
  const nameEn = useSelector(userInfoSelector).nameEn
  return (
    <MainLayout>
      <div className='home'>
        <p className='homeTitle'>
          <span>admin stmi🚗</span>
        </p>
        <p>
          <span className='nameTitle'>你好！{nameEn}</span>
        </p>
      </div>
    </MainLayout>
  )
}

export default Home
