import { dateTime, loadComponent, setTextContent, unixEpochToDate } from '../utilities.js'
import current from '../../fixtures/current'

const template = `
  <style>
    :host {
      display: block;
    }

    div[data-x-current] h3 {
      padding-left: 0.5rem;
    }

    div[data-x-current] ul {
      list-style-type: none;
      padding: 0 0 1rem 1.5rem;
    }

    div[data-x-current] ul > li {
      padding: 0.5rem 0 0 0;
    }

    div[data-x-current] #time {
      display: none;
    }
  </style>

  <div data-x-current>
    <h3>Currently</h3>
    <ul>
      <li id="time"></li>
      <li><img alt="" id="icon"></img></li>
      <li><span id="temperature"></span>°C</li>
    </ul>
  </div>
`

const XCurrent = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }

  connectedCallback() {
    this.refresh().then(res => {
      this.render(res)
    })
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

  set iconAlt(iconAlt) {
    this.shadowRoot.querySelector('#icon').setAttribute('alt', iconAlt)
  }

  set iconSrc(iconSrc) {
    this.shadowRoot.querySelector('#icon').src = iconSrc
  }

  set temperature(temperature) {
    this.setAttribute('temperature', temperature)

    setTextContent(this.shadowRoot, 'temperature', temperature)
  }

  set timestamp(timestamp) {
    setTextContent(
      this.shadowRoot,
      'time',
      dateTime(unixEpochToDate(timestamp)).H(':').M(':').S().getResults()
    )
  }

  _getCurrentWeather({ appid, host, location }) {
    if (appid && host && location) {
      // this is a main API call, and ultimately should trigger an attribute change
      return this._serviceHandler({ appid, host, location }).then(result => {
        const { coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod } = result // eslint-disable-line no-unused-vars

        return {
          iconAlt: weather[0].description,
          iconSrc: weather[0].icon,
          temperature: {
            kelvin: main.temp,
            celsius: main.temp - 273,
            fahrenheit: ((9 / 5) * (main.temp - 273)) + 32
          },
          timestamp: dt
        }
      })
    }
  }

  refresh() {
    const config = {
      appid: this.parentElement.getAttribute('appid'),
      host: this.parentElement.getAttribute('host'),
      location: this.parentElement.getAttribute('location')
    }

    return this._getCurrentWeather(config)
  }

  render({ iconAlt, iconSrc, temperature, timestamp }) {
    this.temperature = Number.parseFloat(temperature.celsius).toFixed(2)
    this.iconAlt = iconAlt
    this.iconSrc = `https://openweathermap.org/img/w/${iconSrc}.png`
    this.timestamp = timestamp
  }

  _serviceHandler({ appid, host, location }) {
    const url = `https://${host}/data/2.5/weather?q=${location}&appid=${appid}` // eslint-disable-line no-unused-vars

    return current
    // return fetch(url, {
    //   method: 'GET'
    // }).then(res => {
    //   if (res.ok) {
    //     return res.json()
    //   }
    // })
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-current',
  element: XCurrent
})

export default XCurrent
