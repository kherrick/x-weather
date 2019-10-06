import { convertTemperature } from '../../../../utilities'
import { updateForecastWeather } from '../updateForecastWeather'

const _serviceHandler = ({ appid, host, latitude, longitude, placename }) => {
  // http://forecast.weather.gov/MapClick.php?lat=${latitude}&lon=${longitude}

  // `https://${host}/data/2.5/forecast/daily?id=${stationId}&mode=json&units=metric&cnt=14&appid=${appid}`
  // `https://${host}/data/2.5/forecast/daily?q=${location}&mode=json&units=metric&cnt=14&appid=${appid}`

  const url = `https://${host}/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=14&appid=${appid}`

  // return forecast
  return fetch(url, {
    method: 'GET'
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
  })
}

const _getForecastWeather = ({ appid, host, latitude, longitude, placename }) => {
  if (appid && host && latitude && longitude && placename) {
    return _serviceHandler({ appid, host, latitude, longitude, placename }).then(result => {
      if (!result) {
        throw new Error(
          `failed to get result from the forecast weather service using: appid: ${appid}, host: ${host}, latitude: ${latitude}, longitude: ${longitude}, placename: ${placename}`
        )
      }

      const { city, cod, message, cnt, list } = result // eslint-disable-line no-unused-vars

      return JSON.stringify(list)
    })
  }
}

const getForecastWeather = ({ appid, host }) => {
  return (dispatch, getState) => {
    const { latitude, longitude, placename } = getState().weather.preferences.location

    return _getForecastWeather({ appid, host, latitude, longitude, placename }).then(json => {
      if (json.length > 0) {
        dispatch(updateForecastWeather({ json }))
      }
    })
  }
}

export { getForecastWeather }
export default getForecastWeather
