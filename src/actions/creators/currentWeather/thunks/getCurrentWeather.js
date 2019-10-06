import { convertTemperature } from '../../../../utilities'
import { updateCurrentWeather } from '../updateCurrentWeather'

const _serviceHandler = ({ appid, host, latitude, longitude, placename }) => {
  // http://forecast.weather.gov/MapClick.php?lat=${latitude}&lon=${longitude}

  // `https://${host}/data/2.5/weather?id=${stationId}&appid=${appid}`
  // `https://${host}/data/2.5/weather?q=${location}&appid=${appid}`
  const url = `https://${host}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`

  // return current
  return fetch(url, {
    method: 'GET'
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
  })
}

const _getCurrentWeather = ({ appid, host, latitude, longitude, placename }) => {
  if (appid && host && latitude && longitude && placename) {
    return _serviceHandler({ appid, host, latitude, longitude, placename }).then(result => {
      if (!result) {
        throw new Error(
          `failed to get result from the current weather service using: appid: ${appid}, host: ${host}, latitude: ${latitude}, longitude: ${longitude}, placename: ${placename}`
        )
      }

      const { coord, weather, base, main, visibility, wind, clouds, dt, sys, timezone, id, name, cod } = result // eslint-disable-line no-unused-vars

      return JSON.stringify({
        sunrise: sys.sunrise,
        sunset: sys.sunset,
        timezone,
        iconAlt: weather[0].description,
        iconSrc: weather[0].icon,
        temperature: {
          kelvin: main.temp,
          celsius: convertTemperature(main.temp, 'kToC'),
          fahrenheit: convertTemperature(main.temp, 'kToF')
        },
        timestamp: dt
      })
    })
  }
}

const getCurrentWeather = ({ appid, host }) => {
  return (dispatch, getState) => {
    const { latitude, longitude, placename } = getState().weather.preferences.location

    return _getCurrentWeather({ appid, host, latitude, longitude, placename }).then(json => {
      if (json.length > 0) {
        dispatch(updateCurrentWeather({ json }))
      }
    })
  }
}

export { getCurrentWeather }
export default getCurrentWeather
