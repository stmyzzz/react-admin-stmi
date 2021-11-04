/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-29 09:53:10
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 15:27:05
 */
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
