import { store } from '../store/configureStore'

import { getCurrentWeather as getCurrentWeatherCreator } from '../actions/creators/currentWeather/thunks/getCurrentWeather'
import { getForecastWeather as getForecastWeatherCreator } from '../actions/creators/forecastWeather/thunks/getForecastWeather'

import {
  swapPrimaryScaleCurrent as swapPrimaryScaleCurrentCreator,
  swapPrimaryScaleForecast as swapPrimaryScaleForecastCreator
} from '../actions/creators'

export const getCurrentWeather = ({ appid, host, location }) => {
  store.dispatch(getCurrentWeatherCreator({ appid, host, location }))
}

export const getForecastWeather = ({ appid, host, location }) => {
  store.dispatch(getForecastWeatherCreator({ appid, host, location }))
}

export const swapPrimaryScaleCurrent = primaryScale => {
  store.dispatch(swapPrimaryScaleCurrentCreator(primaryScale))
}

export const swapPrimaryScaleForecast = primaryScale => {
  store.dispatch(swapPrimaryScaleForecastCreator(primaryScale))
}
