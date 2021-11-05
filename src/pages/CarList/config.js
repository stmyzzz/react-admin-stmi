/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-04 16:10:21
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 16:57:58
 */
import { Button, Badge } from 'antd'
export const sellStatus = {
  0: '待发售',
  1: '已发售'
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
        return <div>{record.sellCity}</div>
      }
    },
    {
      title: '上市时间',
      dataIndex: 'openCityTime',
      key: 'openCityTime',
      render: (text, record) => {
        return <div>{record.openCityTime}</div>
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
  },
  { title: '更新时间', dataIndex: 'updateAt', key: 'updateAt' }
]