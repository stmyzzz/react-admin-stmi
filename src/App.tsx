import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import React from 'react'
// import { Provider } from 'react-redux'
// import store from './redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import login from './pages/Login'
import InnerLayout from './Layout/InnerLayout'
import OuterLayout from './Layout/OuterLayout'
import PageLoading from './components/base'
moment.locale('zh-cn')
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      {/* <Provider> */}
      <Router>
        <React.Suspense fallback={<PageLoading />}>
          <Switch>
            <Route exact path='/account' component={OuterLayout}></Route>
            <Route path='/' component={InnerLayout}></Route>
          </Switch>
        </React.Suspense>
      </Router>
      {/* </Provider> */}
    </ConfigProvider>
  )
}

export default App
