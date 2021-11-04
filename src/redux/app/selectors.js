/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-08-31 17:48:34
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-01 13:59:14
 */
// import { createSelector } from 'reselect'
export const tagsSelector = state => state.app.tags

export const activeTagSelector = state => state.app.activeTag
