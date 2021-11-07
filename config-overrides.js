/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-29 09:53:10
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-07 20:10:59
 */
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
