/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-10-25 10:06:13
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-25 10:55:29
 */
const express = require('express')
const app = express()
const port = 3030
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.use(express.json())
app.use('/', require('./user.js'))
app.get('/', (req, res) => {
  res.send('express')
})

app.listen(port, () => {
  console.log('ok')
})
