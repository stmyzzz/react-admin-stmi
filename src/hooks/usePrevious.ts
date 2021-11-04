/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-01 17:13:49
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-01 17:14:07
 */
import { useRef, useEffect } from 'react'

export default function usePrevious<T>(value: T) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
