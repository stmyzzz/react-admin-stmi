/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-25 10:04:07
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-25 10:20:28
 */
var express = require('express')
var router = express.Router()

router.get('/userList', function (req, res) {
  const response = {
    status: 200,
    ret: 0,
    data: {
      id: 1
    }
  }
  return res.json(response)
})

export default router
