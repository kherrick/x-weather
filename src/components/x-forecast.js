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
    this.refresh().then(currentForecast => {
      this.render(currentForecast)

      // set this as a class property to be used later
      this.currentForecast = currentForecast
    })
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // handle the scale attribute change
    if (oldVal !== newVal && attrName === 'scale' ) {
      this.render(this.currentForecast)
    }
  }

  static get observedAttributes() {
    return [ 'scale' ]
  }

  get appid() {
    return this.getAttribute('appid')
  }

  set appid(appid) {
    this.setAttribute('appid', appid)
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

  _buildDateContainer(forecast) {
    const dateContainer = document.createElement('div')
    dateContainer.setAttribute('data-x-forecast-date-container', '')

    // build forecast list
    if (forecast && !isObjectEmpty(forecast)) {
      const today = dateTime(new Date()).Y('-').m('-').d('').getResults()

      forecast.forEach(props => {
        const { dt, temp, pressure, humidity, weather, speed, deg, clouds, rain } = props // eslint-disable-line no-unused-vars

        const dateItem = document.createElement('ul')
        const dayOfWeek = document.createElement('u')

        const timestamp = unixEpochToDate(dt)
        const current = dateTime(timestamp).Y('-').m('-').d().getResults()

        const day = this.scale === 'F' ? convertTemperature(temp.day, 'cToF') : temp.day
        const night = this.scale === 'F' ? convertTemperature(temp.night, 'cToF') : temp.night

        if (current === today) {
          dayOfWeek.textContent = 'Today:'
        } else {
          const weekDay = dateTime(timestamp)['date'].toLocaleString('en-US', { weekday: 'long'} )
          const ddMM = dateTime(timestamp).m('/').d().getResults()

          dayOfWeek.textContent = `${weekDay} (${ddMM}):`
        }

        const dayOfWeekItem = document.createElement('li')
        dayOfWeekItem.appendChild(dayOfWeek)

        dateItem.appendChild(dayOfWeekItem)

        const dayListItem = document.createElement('li')
        dayListItem.textContent = `Day: ${Number.parseFloat(day).toFixed(2)}°${this.scale}`

        dateItem.appendChild(dayListItem)

        const nightListItem = document.createElement('li')
        nightListItem.textContent = `Night: ${Number.parseFloat(night).toFixed(2)}°${this.scale}`

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

        // set the class property "forecast" to result.list
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

  render(res) {
    const forecastDayNode = this.shadowRoot.querySelector('[data-x-forecast]')
    const dateContainerNode = this.shadowRoot.querySelector('[data-x-forecast] > [data-x-forecast-date-container]')

    forecastDayNode.replaceChild(this._buildDateContainer(res), dateContainerNode)
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-forecast',
  element: XForecast
})

export default XForecast
