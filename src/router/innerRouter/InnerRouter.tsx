/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-09-27 18:05:11
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-03 18:10:37
 */
import React, { Suspense } from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom'
import PageLoading from '../../components/base/page-loading'
import IRoute from './IRoute'
import { appRoutes } from '@/router/innerRouter/Routes'
interface IProps {
  routeMap: IRoute[]
}
const InnerRouter: React.FC<IProps> = ({ routeMap }) => {
  const getRoutes = (routeMap: IRoute[]) => {
    const routes: RouteProps[] = []
    const getRoute = (routeMap: IRoute[]) => {
      routeMap.forEach(config => {
        const { path, exact, component, children } = config
        if (children) {
          getRoute(children)
        } else {
          routes.push({ path, exact, component })
        }
      })
    }
    getRoute(routeMap)
    return routes
  }
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {appRoutes.map((route: any) => {
          return (
            <Route
              key={route.path + ''}
              path={route.path}
              exact
              component={route.component}
            />
          )
        })}
        {getRoutes(routeMap).map((route: RouteProps) => (
          <Route
            key={route.path + ''}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
        <Redirect path={'*'} to={'/404'}></Redirect>
      </Switch>
    </Suspense>
  )
}

export default InnerRouter
