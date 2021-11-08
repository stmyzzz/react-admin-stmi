/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-30 09:56:25
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 17:13:44
 */
import { handleActions } from 'redux-actions'
import {
  ADD_TAG,
  REMOVE_TAG,
  SET_ACTIVE_TAG,
  SET_USER_INFO,
  REMOVE_USER_INFO
} from './actions'
import { localRead, localSave, localRemove } from '@/libs/utils'
import { routes } from '@/router/innerRouter/Routes'
import { getPathByRoutes } from '@/libs/utils'
const INITIAL_STATE = {
  tags: JSON.parse(localRead('tags') || '[]'),
  activeTag: '/',
  userInfo: JSON.parse(localRead('userInfo') || '{}')
}
export const appReducer = handleActions(
  {
    [ADD_TAG]: (state, action) => {
      getPathByRoutes(action.payload)
      if (
        !state.tags.find(tag => action.payload === tag.pathname) &&
        action.payload !== '/' &&
        getPathByRoutes(action.payload)
      ) {
        const obj = {
          title: '',
          pathname: action.payload
        }
        routes.forEach(item => {
          if (item.children) {
            item.children.forEach(it => {
              if (it.path === action.payload) {
                obj.title = it.title
                return
              }
            })
          }
        })
        state.tags.push(obj)
      }
      localSave('tags', JSON.stringify(state.tags))
      return {
        ...state
      }
    },
    [REMOVE_TAG]: (state, action) => {
      state.tags = state.tags.filter(tag => tag.pathname !== action.payload)
      localSave('tags', JSON.stringify(state.tags))
      if (state.tags.length > 0) {
        state.activeTag = state.tags[state.tags.length - 1]['pathname']
      } else {
        state.activeTag = '/'
      }
      return {
        ...state
      }
    },
    [SET_ACTIVE_TAG]: (state, action) => {
      state.activeTag = action.payload
      return {
        ...state
      }
    },
    [SET_USER_INFO]: (state, action) => {
      state.userInfo = action.payload
      localSave('userInfo', JSON.stringify(state.userInfo))
      return {
        ...state
      }
    },
    [REMOVE_USER_INFO]: (state, action) => {
      localRemove('userInfo')
      state.tags = []
      state.userInfo = {}
      localRemove('tags')
      return {
        ...state
      }
    }
  },
  INITIAL_STATE
)
