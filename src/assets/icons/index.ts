/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-28 11:29:41
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 10:44:31
 */
import { tupleStr } from '../../libs/core'
import menu1 from './colour/menu1.svg'
import menu2 from './colour/menu2.svg'
import menu3 from './colour/menu3.svg'
import menu4 from './colour/menu4.svg'

interface IBlackIcon {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
}

interface IColourIcon {
  [key: string]: string
}

// 单色
export const BLACK_ICON_MAP: IBlackIcon = {}

// 多色
export const COLOUR_ICON_MAP: IColourIcon = {
  menu1,
  menu2,
  menu3,
  menu4
}

// 图标名称类型
const blackIconNames = tupleStr()
const colourIconNames = tupleStr('menu1', 'menu2', 'menu3', 'menu4')
export type BlackIconName = typeof blackIconNames[number]
export type ColourIconName = typeof colourIconNames[number]
export type IconName = BlackIconName | ColourIconName
