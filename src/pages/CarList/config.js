/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-04 16:10:21
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 15:09:51
 */
import { Button, Badge } from 'antd'
import { formatTime } from '@/libs/utils'
export const sellStatus = {
  0: '待发售',
  1: '已发售'
}
export const sellCityMap = [
  { label: '北京', value: '1001' },
  { label: '广州', value: '1002' },
  { label: '深圳', value: '1003' }
]
export const sellCity = {
  1001: '北京',
  1002: '广州',
  1003: '深圳'
}
export const carColumns = handleEdit => {
  return [
    {
      title: '车型',
      dataIndex: 'carType',
      key: 'carType',
      render: (text, record) => {
        return <div>{record.carType}</div>
      }
    },
    {
      title: '销售城市',
      dataIndex: 'sellCity',
      key: 'sellCity',
      render: (text, record) => {
        return (
          <div>
            {record.sellCity
              .split(',')
              .map(item => {
                console.log(`item`, item)
                return sellCity[item]
              })
              .join(',')}
          </div>
        )
      }
    },
    {
      title: '上市时间',
      dataIndex: 'openCityTime',
      key: 'openCityTime',
      render: (text, record) => {
        return (
          <div>
            {formatTime(record.openCityTime[0], 'YYYY-MM-DD') +
              '-' +
              formatTime(record.openCityTime[1], 'YYYY-MM-DD')}
          </div>
        )
      }
    },
    {
      title: '价格区间',
      dataIndex: 'priceRange',
      key: 'priceRange',
      render: (text, record) => {
        return <div>{record.priceRange}</div>
      }
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
      key: 'updateAt',
      render: (text, record) => {
        return <div>{formatTime(record.updatedAt, 'YYYY-MM-DD HH:mm:ss')}</div>
      }
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {
        return (
          <Button
            onClick={() => {
              handleEdit(record, 'edit')
            }}
          >
            编辑
          </Button>
        )
      }
    }
  ]
}

export const typeColmns = [
  { title: '型号', dataIndex: 'typeNumber', key: 'typeNumber' },
  { title: '最大功率', dataIndex: 'maxPower', key: 'maxPower' },
  { title: '百公里加速', dataIndex: 'hundredSpeed', key: 'hundredSpeed' },
  { title: '最高时速', dataIndex: 'maxSpeed', key: 'maxSpeed' },
  { title: '价格', dataIndex: 'typePrice', key: 'typePrice' },
  {
    title: '状态',
    key: 'status',
    render: (text, record) => (
      <span>
        <Badge status={record.status === 0 ? 'warning' : 'success'} />
        {sellStatus[record.status]}
      </span>
    )
  }
]
