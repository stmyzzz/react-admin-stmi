/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-29 14:55:31
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-30 19:09:07
 */
import Mock from 'mockjs'
//获取列表
Mock.mock('http://localhost:3000/contract/list', {
  status: 200,
  ret: 0,
  page_no: 1, // 当前页数
  pages: 1, // 总页数
  records: [
    {
      id: 1,
      no: '@integer(5)',
      name: '默认套餐',
      description: 'primary',
      cities_id: '1001,1002',
      contract_period: 1,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: true
    },
    {
      id: 2,
      no: '@integer(5)',
      name: '套餐2',
      description: '超级vip好套餐',
      cities_id: '1001',
      contract_period: 20,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    },
    {
      id: 3,
      no: '@integer(5)',
      name: '套餐3',
      description: '',
      cities_id: '1001',
      contract_period: 20,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    },
    {
      id: 4,
      no: '@integer(5)',
      name: '套餐4',
      description: '',
      cities_id: '1001',
      contract_period: 20,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    },
    {
      id: 5,
      no: '@integer(5)',
      name: '套餐5',
      description: '',
      cities_id: '1001',
      contract_period: 15,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    },
    {
      id: 6,
      no: '@integer(5)',
      name: '套餐6',
      description: '',
      cities_id: '1001',
      contract_period: 10,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    },
    {
      id: 7,
      no: '@integer(5)',
      name: '套餐7',
      description: '',
      cities_id: '1001',
      contract_period: 30,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    },
    {
      id: 8,
      no: '@integer(5)',
      name: '套餐8',
      description: '',
      cities_id: '1001',
      contract_period: 60,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      default: false
    }
  ],
  page_size: 10, // 每页条数
  total: 20 // 总条数
})

//操作
Mock.mock('http://localhost:3000/contract/operate', {
  status: 200,
  ret: 0,
  data: {
    id: 1
  }
})
