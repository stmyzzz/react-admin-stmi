/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-11-01 17:13:49
 * @LastEditors: stmy.ding
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
