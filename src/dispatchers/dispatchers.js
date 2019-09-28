import { store } from '../store/configureStore'

import { getCurrentWeather as getCurrentWeatherCreator } from '../actions/creators/currentWeather/thunks/getCurrentWeather'
import { getForecastWeather as getForecastWeatherCreator } from '../actions/creators/forecastWeather/thunks/getForecastWeather'

import {
  swapPrimaryScaleCurrent as swapPrimaryScaleCurrentCreator,
  swapPrimaryScaleForecast as swapPrimaryScaleForecastCreator,
  updateLocation as updateLocationCreator
} from '../actions/creators'

export const getCurrentWeather = ({ appid, host, latitude, longitude, placename }) => {
  store.dispatch(getCurrentWeatherCreator({ appid, host, latitude, longitude, placename }))
}

export const getForecastWeather = ({ appid, host, latitude, longitude, placename }) => {
  store.dispatch(getForecastWeatherCreator({ appid, host, latitude, longitude, placename }))
}

export const swapPrimaryScaleCurrent = primaryScale => {
  store.dispatch(swapPrimaryScaleCurrentCreator(primaryScale))
}

export const swapPrimaryScaleForecast = primaryScale => {
  store.dispatch(swapPrimaryScaleForecastCreator(primaryScale))
}

export const updateLocation = location => {
  store.dispatch(updateLocationCreator(location))
}
