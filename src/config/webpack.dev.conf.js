/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-29 09:18:06
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 15:31:52
 */
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const webpack = require('webpack')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const resolve = dir => path.resolve(process.cwd(), dir)

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HardSourceWebpackPlugin({
    //   cacheDirectory: '../node_modules/.cache/hard-source/[confighash]',
    //   configHash: function (webpackConfig) {
    //     return require('node-object-hash')({ sort: false }).hash(webpackConfig);
    //   },
    //   environmentHash: {
    //     root: process.cwd(),
    //     directories: [],
    //     files: ['package-lock.json', 'yarn.lock'],
    //   },
    //   cachePrune: {
    //     maxAge: 7 * 24 * 60 * 60 * 1000,
    //     sizeThreshold: 100 * 1024 * 1024
    //   },
    // })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 8090,
    open: true,
    hot: true,
    overlay: true
  }
})
