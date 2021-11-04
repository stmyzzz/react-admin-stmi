/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-08-31 17:48:34
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 12:53:49
 */
// import { createSelector } from 'reselect'
export const tagsSelector = state => state.app.tags

export const activeTagSelector = state => state.app.activeTag

export const userInfoSelector = state => state.app.userInfo
