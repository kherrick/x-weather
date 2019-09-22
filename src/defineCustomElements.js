import { XWeather } from './XWeather'
import { XCurrent } from './containers/XCurrent'
import { XForecast } from './containers/XForecast'

export const defineCustomElements = () => {
  const elements = [
    {
      tagName: 'x-current',
      element: XCurrent
    },
    {
      tagName: 'x-forecast',
      element: XForecast
    },
    {
      tagName: 'x-weather',
      element: XWeather
    }
  ]

  elements.forEach(({ tagName, element }) => {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, element)
    }
  })
}
