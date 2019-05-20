import { convertTemperature, dateTime, isObjectEmpty, loadComponent, unixEpochToDate } from '../utilities.js'
// import forecast from '../../fixtures/forecast'

const template = `
  <style>
    :host {
      display: block;

      --x-forecast-item-float: inherit;
      --x-forecast-item-width: inherit;
    }

    x-forecast-item {
      float: var(--x-forecast-item-float);
      width: var(--x-forecast-item-width);
    }
  </style>

  <div data-x-forecast>
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

        const dateItem = document.createElement('x-forecast-item')
        dateItem.setAttribute('day', this._convertForecast({ scale: this.scale, timeOfDayTemp: temp.day }))
        dateItem.setAttribute('description', weather[0].description)
        dateItem.setAttribute('forecast-date', this._getDayOfWeek({ dt, today }))
        dateItem.setAttribute('icon', `https://openweathermap.org/img/w/${weather[0].icon}.png`)
        dateItem.setAttribute('night', this._convertForecast({ scale: this.scale, timeOfDayTemp: temp.night }))
        dateItem.setAttribute('scale', this.scale)

        dateContainer.appendChild(dateItem)
      })
    }

    return dateContainer
  }

  _convertForecast({ scale, timeOfDayTemp }) {
    return `${Number.parseFloat(scale === 'F' ? convertTemperature(timeOfDayTemp, 'cToF') : timeOfDayTemp).toFixed(2)}`
  }

  _getDayOfWeek({ dt, today }) {
    const timestamp = unixEpochToDate(dt)
    const current = dateTime(timestamp).Y('-').m('-').d().getResults()

    const ddMM = dateTime(timestamp).m('/').d().getResults()

    if (current === today) {
      return `Today (${ddMM}):`
    }

    const weekDay = dateTime(timestamp)['date'].toLocaleString('en-US', { weekday: 'long'} )

    return `${weekDay} (${ddMM}):`
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
