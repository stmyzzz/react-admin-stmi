/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-03 15:13:42
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 18:00:15
 */
import { Chart, Interval, Interaction } from 'bizcharts'

import { data } from './config'
import MainLayout from '@/components/MainLayout'
import './index.scss'
const SetPanel = () => {
  return (
    <MainLayout>
      <div className='setStore'>
        <div className='title'>城市库存分部（条形图）</div>
        <Chart
          scale={{ temperature: { min: 0 } }}
          padding={[10, 20, 50, 40]}
          autoFit
          height={500}
          data={data}
        >
          <Interval shape='smooth' position='month*temperature' color='city' />
          <Interaction type='active-region-click' />
          <Interaction type='active-region' />
        </Chart>
      </div>
      <div className='setMap'></div>
    </MainLayout>
  )
}

export default SetPanel
