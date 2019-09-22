import { convertTemperature } from '../../../../utilities'
import { updateCurrentWeather } from '../updateCurrentWeather'

const _serviceHandler = ({ appid, host, location }) => {
  const url = `https://${host}/data/2.5/weather?q=${location}&appid=${appid}` // eslint-disable-line no-unused-vars

  // return current
  return fetch(url, {
    method: 'GET'
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
  })
}

const _getCurrentWeather = ({ appid, host, location }) => {
  if (appid && host && location) {
    return _serviceHandler({ appid, host, location }).then(result => {
      if (!result) {
        throw new Error(
          `failed to get result from the current weather service using: appid: ${appid}, host: ${host}, location: ${location}`
        )
      }

      const { coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod } = result // eslint-disable-line no-unused-vars

      return JSON.stringify({
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

const getCurrentWeather = ({ appid, host, location }) => {
  return dispatch => {
    return _getCurrentWeather({ appid, host, location }).then(json => {
      if (json.length > 0) {
        dispatch(updateCurrentWeather({ json }))
      }
    })
  }
}

export { getCurrentWeather }
export default getCurrentWeather
