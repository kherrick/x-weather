// get components
import XCurrent, { load as XCurrentLoad } from './components/x-current.js'
import XForecast, { load as XForecastLoad } from './components/x-forecast.js'
import XWeather, { load as XWeatherLoad } from './components/x-weather.js'

XCurrentLoad()
XForecastLoad()

XWeatherLoad()

export default {
  XCurrent, XForecast, XWeather
}
