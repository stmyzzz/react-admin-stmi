/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: stmy.ding
 * @LastEditTime: 2021-10-22 15:26:43
 */
import { ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
