/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-22 13:34:51
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-03 09:30:13
 */
const createProxyMiddleware = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://112.74.56.190:3000',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
