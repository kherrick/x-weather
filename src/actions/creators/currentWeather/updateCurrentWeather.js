import { UPDATE_CURRENT_WEATHER } from '../../types'

export const updateCurrentWeather = ({ json }) => ({ type: UPDATE_CURRENT_WEATHER, payload: JSON.parse(json) })
