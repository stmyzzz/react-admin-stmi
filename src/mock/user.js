/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-25 09:48:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-02 17:42:54
 */

import Mock from 'mockjs'
//获取列表
Mock.mock('http://localhost:3000/con/list', {
  status: 200,
  ret: 0,
  page_no: 1, // 当前页数
  pages: 1, // 总页数
  'records|30': [
    {
      'id|+1': 1,
      no: '@integer(5)',
      apply_date: '@datetime(yyyy-MM-dd HH:mm:ss)',
      plan_start_date: '@datetime(yyyy-MM-dd HH:mm:ss)',
      plan_end_date: '@datetime(yyyy-MM-dd HH:mm:ss)',
      real_start_date: '@datetime(yyyy-MM-dd HH:mm:ss)',
      real_end_date: '@datetime(yyyy-MM-dd HH:mm:ss)',
      'status|1-6': 1,
      reject_reason: '车贴驳回原因',
      'driver_id|+1': '@integer(100000, 1000000)',
      'city_id|+1': 1,
      vehicle_plate: '粤@string("upper", 6)',
      vehicle_plate_color: '黑',
      'vehicle_id+1': 1,
      'package_no|+1': 1,
      op_user: '@cname()',
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      pkg: {
        name: '超级套餐',
        'contract_period|+30': 30
      },
      driver_info: {
        full_name: '@cname'
      },
      'driver_photo|4': [
        {
          'type|1-4': 1,
          url: '@image("200x200", "#4A7BF7", "photos")',
          reupload_reason: '重传原因'
        }
      ]
    }
  ],
  page_size: 10, // 每页条数
  total: 20 // 总条数
})

//请求照片列表
Mock.mock('http://localhost:3000/user/photos', {
  status: 200,
  ret: 0,
  'data|4': [
    {
      'id|+1': 1,
      url: '@image("200x200", "#4A7BF7", "sticker")',
      'type|+1': 1
    }
  ]
})

//操作
Mock.mock('http://localhost:3000/user/operate', {
  status: 200,
  ret: 0,
  data: {
    id: 1
  }
})

Mock.mock('http://localhost:3000/userInfo', {
  status: 200,
  ret: 0,
  data: {
    name: 'dingshen',
    id: 1,
    permission: ['1', '2', '3']
  }
})

//获取用户列表
Mock.mock('http://localhost:3000/user/list', {
  status: 200,
  ret: 0,
  page_no: 1, // 当前页数
  pages: 1, // 总页数
  'data|30': [
    {
      'id|+1': 1,
      nameZh: '@cname()',
      nameEn: '@name()',
      jobName: '前端工程师',
      status: 1,
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)',
      login_at: '@datetime(yyyy-MM-dd HH:mm:ss)'
    }
  ],
  page_size: 10, // 每页条数
  total: 20 // 总条数
})

//获取权限角色列表
Mock.mock('http://localhost:3000/permission/list', {
  status: 200,
  ret: 0,
  page_no: 1, // 当前页数
  pages: 1, // 总页数
  data: [
    {
      id: 1,
      role: '前端工程师',
      permission: [
        'admin',
        'userAdmin',
        'permissionAdmin',
        'user',
        'userList',
        'adminList'
      ],
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)'
    },
    {
      id: 2,
      role: '后端工程师',
      permission: [
        'admin',
        'userAdmin',
        'permissionAdmin',
        'user',
        'userList',
        'adminList'
      ],
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)'
    },
    {
      id: 3,
      role: '测试工程师',
      permission: [
        'admin',
        'userAdmin',
        'permissionAdmin',
        'car',
        'carList',
        'setList'
      ],
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)'
    },
    {
      id: 4,
      role: '产品经理',
      permission: [
        'admin',
        'userAdmin',
        'permissionAdmin',
        'user',
        'userList',
        'adminList',
        'car',
        'carList',
        'setList'
      ],
      created_at: '@datetime(yyyy-MM-dd HH:mm:ss)'
    }
  ],
  page_size: 10, // 每页条数
  total: 20 // 总条数
})
