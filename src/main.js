// get components
import XCurrent, { load as XCurrentLoad } from './components/x-current.js'
import XForecastItem, { load as XForecastItemLoad } from './components/x-forecast-item.js'
import XForecast, { load as XForecastLoad } from './components/x-forecast.js'
import XWeather, { load as XWeatherLoad } from './components/x-weather.js'

XCurrentLoad()
XForecastItemLoad()
XForecastLoad()

XWeatherLoad()

export default {
  XCurrent, XForecastItem, XForecast, XWeather
}
