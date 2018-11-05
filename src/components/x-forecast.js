import { convertTemperature, dateTime, isObjectEmpty, loadComponent, unixEpochToDate } from '../utilities.js'
// import forecast from '../../fixtures/forecast'

const template = `
  <style>
    :host {
      display: block;
    }

    div[data-x-forecast] h3 {
      padding-left: 0.5rem;
    }

    div[data-x-forecast] ul {
      list-style-type: none;
      padding: 0 0 1rem 1.5rem;
    }

    div[data-x-forecast] ul > li {
      padding: 0.5rem 0 0 0;
    }
  </style>

  <div data-x-forecast>
    <h3>Forecast</h3>

    <div data-x-forecast-date-container>
  <div/>
`

const XForecast = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }

  connectedCallback() {
    this.refresh().then((currentForecast) => {
      this.render(currentForecast, this.days)

      // set this as a class property to be used later
      this.currentForecast = currentForecast
    })
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // handle the scale and days attribute change
    if (oldVal === newVal) {
      return
    }

    if (this.days === null) {
      return
    }

    if (attrName === 'days' || attrName === 'scale') {
      this.render(this.currentForecast, this.days)
    }
  }

  static get observedAttributes() {
    return [ 'days', 'scale' ]
  }

  get appid() {
    return this.getAttribute('appid')
  }

  set appid(appid) {
    this.setAttribute('appid', appid)
  }

  get days() {
    return this.getAttribute('days')
  }

  set days(days) {
    this.setAttribute('days', days)
  }

  get host() {
    return this.getAttribute('host')
  }

  set host(host) {
    this.setAttribute('host', host)
  }

  get location() {
    return this.getAttribute('location')
  }

  set location(location) {
    this.setAttribute('location', location)
  }

  get scale() {
    return this.getAttribute('scale')
  }

  set scale(scale) {
    this.setAttribute('scale', scale)
  }

  _buildDayOfWeek({ dt, today }) {
    const dayOfWeek = document.createElement('u')
    const timestamp = unixEpochToDate(dt)
    const current = dateTime(timestamp).Y('-').m('-').d().getResults()

    if (current === today) {
      dayOfWeek.textContent = 'Today:'
    } else {
      const weekDay = dateTime(timestamp)['date'].toLocaleString('en-US', { weekday: 'long'} )
      const ddMM = dateTime(timestamp).m('/').d().getResults()

      dayOfWeek.textContent = `${weekDay} (${ddMM}):`
    }

    const dayOfWeekItem = document.createElement('li')
    dayOfWeekItem.appendChild(dayOfWeek)

    return dayOfWeekItem
  }

  _buildWeatherIcon({ description, icon }) {
    const iconAlt = description
    const iconSrc = `https://openweathermap.org/img/w/${icon}.png`

    const weatherImg = document.createElement('img')
    weatherImg.setAttribute('src', iconSrc)
    weatherImg.setAttribute('alt', iconAlt)

    const weatherIcon = document.createElement('li')
    weatherIcon.appendChild(weatherImg)

    return weatherIcon
  }

  _buildTimeOfDayForecast({ timeOfDayTemp, type }) {
    const temp = this.scale === 'F' ? convertTemperature(timeOfDayTemp, 'cToF') : timeOfDayTemp
    const dayListItem = document.createElement('li')
    dayListItem.textContent = `${type}: ${Number.parseFloat(temp).toFixed(2)}°${this.scale}`

    return dayListItem
  }

  _buildDateContainer(forecast, days) {
    const dateContainer = document.createElement('div')
    dateContainer.setAttribute('data-x-forecast-date-container', '')

    // build forecast list
    if (forecast && !isObjectEmpty(forecast)) {
      const today = dateTime(new Date()).Y('-').m('-').d('').getResults()

      // shorten the forecast to the requested number of days, https://mzl.la/2JDIuy6
      // if the attribute is changed to be smaller
      if (forecast.length > days) {
        forecast.length = days;
      }

      forecast.forEach(props => {
        const { dt, temp, pressure, humidity, weather, speed, deg, clouds, rain } = props // eslint-disable-line no-unused-vars

        const dateItem = document.createElement('ul')

        const dayOfWeekItem = this._buildDayOfWeek({ dt, today })
        dateItem.appendChild(dayOfWeekItem)

        const weatherIcon = this._buildWeatherIcon(weather[0])
        dateItem.appendChild(weatherIcon)

        const dayListItem = this._buildTimeOfDayForecast({ timeOfDayTemp: temp.day, type: 'Day' })
        dateItem.appendChild(dayListItem)

        const nightListItem = this._buildTimeOfDayForecast({ timeOfDayTemp: temp.night, type: 'Night' })
        dateItem.appendChild(nightListItem)

        dateContainer.appendChild(dateItem)
      })
    }

    return dateContainer
  }

  _getForecast({ appid, host, location }) {
    if (appid && host && location) {
      return this._serviceHandler({ appid, host, location }).then(result => {
        const { city, cod, message, cnt, list } = result // eslint-disable-line no-unused-vars

        return list
      })
    }
  }

  _serviceHandler({ appid, host, location }) {
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

  refresh() {
    const config = {
      appid: this.parentElement.getAttribute('appid'),
      host: this.parentElement.getAttribute('host'),
      location: this.parentElement.getAttribute('location')
    }

    return this._getForecast(config)
  }

  render(res, days) {
    const forecastDayNode = this.shadowRoot.querySelector('[data-x-forecast]')
    const dateContainerNode = this.shadowRoot.querySelector('[data-x-forecast] > [data-x-forecast-date-container]')

    forecastDayNode.replaceChild(this._buildDateContainer(res, days), dateContainerNode)
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-forecast',
  element: XForecast
})

export default XForecast
