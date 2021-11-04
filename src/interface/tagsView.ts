/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-30 11:43:33
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 14:54:09
 */
export type TagItem = {
  id: string
  label: {
    zh_CN: string
    en_US: string
  }
  path: string
  closable: boolean
}
export interface TagState {
  /** tagsView list */
  tags: TagItem[]
  activeTagId: TagItem['id']
}
