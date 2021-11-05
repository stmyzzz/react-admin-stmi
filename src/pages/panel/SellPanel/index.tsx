/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-03 15:13:42
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 17:27:15
 */
import { Chart, LineAdvance, DonutChart } from 'bizcharts'
import { Row, Col } from 'antd'
import { LineData, circleData } from './config'
import {
  CheckCircleFilled,
  CarryOutFilled,
  DollarCircleFilled,
  CarFilled
} from '@ant-design/icons'
import CountUp from 'react-countup'
import MainLayout from '@/components/MainLayout'
import './index.scss'
const SellPanel = () => {
  return (
    <MainLayout>
      <Row className='index-header'>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className='base-style wechat'>
            <CheckCircleFilled className='icon-style' />
            <div>
              <CountUp end={130} start={0} className='card-panel-num' />
              <div className='base-title'>成交额(百万)</div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className='base-style sell'>
            <CarFilled className='icon-style' />
            <div>
              <CountUp end={13520} start={0} className='card-panel-num' />
              <div className='base-title'>销量(台)</div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className='base-style wechat'>
            <DollarCircleFilled className='icon-style' />
            <div>
              <CountUp end={160} start={0} className='card-panel-num' />
              <div className='base-title'>预付额（百万）</div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className='base-style wechat'>
            <CarryOutFilled className='icon-style' />
            <div>
              <CountUp end={16552} start={0} className='card-panel-num' />
              <div className='base-title'>订单量（台）</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={LineData}>
          <LineAdvance
            shape='smooth'
            point
            area
            position='month*temperature'
            color='city'
          />
        </Chart>
        <div className='sell-type'></div>
      </Row>
      <Row style={{ marginTop: '20px', marginBottom: '100px' }}>
        <DonutChart
          data={circleData || []}
          title={{
            visible: true,
            text: '车型占比'
          }}
          autoFit
          description={{
            visible: true,
            text: '汽车车型占总销售量的比重'
          }}
          height={400}
          radius={0.8}
          padding='auto'
          angleField='value'
          colorField='type'
          pieStyle={{ stroke: 'white', lineWidth: 6 }}
        />
      </Row>
    </MainLayout>
  )
}

export default SellPanel
