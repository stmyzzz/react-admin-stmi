/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-05 10:06:17
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-05 14:44:42
 */

import { put, call } from 'redux-saga/effects'
import { getCarList, addCar, updateCar } from '@/services/car/carList'
import { setError } from '@/redux/error/actions'
import { getCarListSuccessed } from '../actions'

export function* getCarListSaga({ payload }) {
  try {
    const response = yield call(getCarList, payload)
    console.log(`response`, response)
    const res = {
      page_no: 1,
      page_size: 10,
      pages: 1,
      ret: 0,
      status: 200,
      total: 4,
      data: [
        {
          id: 4,
          carType: 'panamera2',
          sellCity: '1001,1002,1003',
          openCityTime: '[123,123]',
          priceRange: '1000-2000',
          types: [
            {
              typeNumber: 'panamera2 Turbo',
              maxPower: '123',
              hundredSpeed: '100km/h',
              maxSpeed: '100',
              typePrice: '200',
              status: 1,
              updateAt: '2021-10-10'
            },
            {
              typeNumber: 'panamera2 super',
              maxPower: '1232',
              hundredSpeed: '10012km/h',
              maxSpeed: '1100',
              typePrice: '12a00',
              status: 0,
              updateAt: '20212-10-10'
            }
          ],
          createdAt: '2021-11-05T01:58:23.000Z',
          updatedAt: '2021-11-05T01:58:23.000Z'
        },
        {
          id: 3,
          carType: 'panamera',
          sellCity: '1001,1002,1003',
          openCityTime: '[123,123]',
          priceRange: '1000-2000',
          types: [
            {
              typeNumber: 'panamera Turbo',
              maxPower: '123',
              hundredSpeed: '100km/h',
              maxSpeed: '10120',
              typePrice: '2300',
              status: 1,
              updateAt: '2021-10-10'
            }
          ],
          createdAt: '2021-11-05T01:51:52.000Z',
          updatedAt: '2021-11-05T02:00:24.000Z'
        },
        {
          id: 2,
          carType: '718',
          sellCity: '1001,1002,1003',
          openCityTime: '[123,123]',
          priceRange: '1000-2000',
          types: [
            {
              typeNumber: '71128 Turbo',
              maxPower: '1aw23',
              hundredSpeed: '10as0km/h',
              maxSpeed: '1030',
              typePrice: '21200',
              status: 1,
              updateAt: '2021-10-10'
            }
          ],
          createdAt: '2021-11-05T01:51:47.000Z',
          updatedAt: '2021-11-05T01:51:47.000Z'
        },
        {
          id: 1,
          carType: '911',
          sellCity: '1001,1002,1003',
          openCityTime: '[123,123]',
          priceRange: '1000-2000',
          types: [
            {
              typeNumber: '911 super',
              maxPower: '121233',
              hundredSpeed: '100213km/h',
              maxSpeed: '101230',
              typePrice: '201230',
              status: 1,
              updateAt: '20321-10-10'
            }
          ],
          createdAt: '2021-11-05T01:42:11.000Z',
          updatedAt: '2021-11-05T01:42:11.000Z'
        }
      ]
    }
    if (res.ret === 0) {
      yield put(getCarListSuccessed(res))
      return
    }
  } catch (err) {
    yield put(setError(err))
  }
}

export function* addCarSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(addCar, payload)
    if (resolve) return resolve(response)
  } catch (err) {
    yield put(setError(err))
    if (reject) reject(err)
  }
}

export function* updateCarSaga({ payload, resolve, reject }) {
  try {
    const response = yield call(updateCar, payload)
    if (resolve) return resolve(response)
  } catch (err) {
    yield put(setError(err))
    if (reject) reject(err)
  }
}
