/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-04 11:01:30
 */
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InnerLayout from './Layout/InnerLayout'
import OuterLayout from './Layout/OuterLayout'
import PageLoading from './components/base'
import { Provider } from 'react-redux'
import store from './redux'
import { errorRoutes } from '@/router/outerRouter/Routes'
moment.locale('zh-cn')
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
          <React.Suspense fallback={<PageLoading />}>
            <Switch>
              {errorRoutes.map((item: any) => {
                return (
                  <Route
                    key={item.title}
                    exact
                    path={item.path}
                    component={item.component}
                  ></Route>
                )
              })}
              <Route exact path='/login' component={OuterLayout}></Route>
              <Route path='/' component={InnerLayout}></Route>
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    </ConfigProvider>
  )
}

export default App
