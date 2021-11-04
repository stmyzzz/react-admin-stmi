/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-02 15:57:07
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-02 17:18:25
 */

export const permissionListSelector = state => state.permission.permissionList
export const isLoadingPermissionListSelector = state =>
  state.permission.loading.permissionList
