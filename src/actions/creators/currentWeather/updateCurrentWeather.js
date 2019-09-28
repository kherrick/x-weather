import { CURRENT_WEATHER_UPDATE } from '../../types'

export const updateCurrentWeather = ({ json }) => ({ type: CURRENT_WEATHER_UPDATE, payload: JSON.parse(json) })
