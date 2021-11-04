/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-10-27 13:49:41
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-27 14:10:09
 */
import { useDispatch } from 'react-redux'

//异步请求hooks
export const usePromise = () => {
  const dispatch = useDispatch()
  return action => {
    return new Promise((resolve, reject) => {
      dispatch({ ...action, resolve, reject })
    })
  }
}
