/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-21 23:09:45
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-10-22 17:28:13
 */
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const isProd = process.env.REACT_APP_ENV === 'production'

//创建一个saga middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
// 开启redux devtools调试工具

// compose(fn1, fn2, fn3) (...args) = > fn1(fn2(fn3(...args)))
const composeEnhancers = isProd
  ? compose //@ts-ignore
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
//运行监控各个actions
sagaMiddleware.run(rootSaga)

export default store
