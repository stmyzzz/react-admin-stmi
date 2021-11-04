/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-03 09:31:42
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 11:36:48
 */
import Mock from 'mockjs'
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
