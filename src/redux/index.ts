import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const isProd = process.env.REACT_APP_ENV === 'production'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
// 开启redux devtools调试工具

const composeEnhancers = isProd
  ? compose //@ts-ignore
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export default store
