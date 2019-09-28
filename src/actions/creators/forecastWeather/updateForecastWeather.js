import { FORECAST_WEATHER_UPDATE } from '../../types'

export const updateForecastWeather = ({ json }) => ({ type: FORECAST_WEATHER_UPDATE, payload: JSON.parse(json) })
