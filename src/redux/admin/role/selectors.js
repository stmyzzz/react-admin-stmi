/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 15:57:07
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-02 17:18:25
 */

export const permissionListSelector = state => state.permission.permissionList
export const isLoadingPermissionListSelector = state =>
  state.permission.loading.permissionList
