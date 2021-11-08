/*
 * @Description:
 * @version:
 * @Author: stmy.ding
 * @Date: 2021-09-27 18:05:11
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-08 11:15:35
 */
import React, { Suspense } from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
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
      </Switch>
    </Suspense>
  )
}

export default InnerRouter
