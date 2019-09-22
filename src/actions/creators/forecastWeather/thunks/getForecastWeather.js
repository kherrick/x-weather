import { convertTemperature } from '../../../../utilities'
import { updateForecastWeather } from '../updateForecastWeather'

const _serviceHandler = ({ appid, host, location }) => {
  const url = `https://${host}/data/2.5/forecast/daily?q=${location}&mode=json&units=metric&cnt=14&appid=${appid}` // eslint-disable-line no-unused-vars

  // return forecast
  return fetch(url, {
    method: 'GET'
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
  })
}

const _getForecastWeather = ({ appid, host, location }) => {
  if (appid && host && location) {
    return _serviceHandler({ appid, host, location }).then(result => {
      if (!result) {
        throw new Error(
          `failed to get result from the forecast weather service using: appid: ${appid}, host: ${host}, location: ${location}`
        )
      }

      const { city, cod, message, cnt, list } = result // eslint-disable-line no-unused-vars

      return JSON.stringify(list)
    })
  }
}

const getForecastWeather = ({ appid, host, location }) => {
  return dispatch => {
    return _getForecastWeather({ appid, host, location }).then(json => {
      if (json.length > 0) {
        dispatch(updateForecastWeather({ json }))
      }
    })
  }
}

export { getForecastWeather }
export default getForecastWeather
