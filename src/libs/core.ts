/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-28 11:34:31
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 14:53:29
 */
// 方便生成联合类型
export const tupleStr = <T extends string[]>(...args: T) => args
