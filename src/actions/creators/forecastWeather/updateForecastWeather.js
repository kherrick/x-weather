import { UPDATE_FORECAST_WEATHER } from '../../types'

export const updateForecastWeather = ({ json }) => ({ type: UPDATE_FORECAST_WEATHER, payload: JSON.parse(json) })
