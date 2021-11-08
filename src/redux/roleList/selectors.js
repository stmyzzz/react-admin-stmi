/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-02 15:57:07
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-11-02 17:18:25
 */

export const roleListSelector = state => state.permission.roleList
export const isLoadingRoleListSelector = state =>
  state.permission.loading.roleList
