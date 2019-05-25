import { convertTemperature, dateTime, loadComponent, to12HourTime, unixEpochToDate } from '../utilities.js'
// import current from '../../fixtures/current'

const template = `
  <style>
    :host {
      display: block;

      --icon-display: inherit
    }

    [data-x-current-icon] {
      /* defaulted for ie11 */
      display: block;

      display: var(--icon-display);
      height: 7.5rem;
      margin: auto;
      width: 7.5rem;
    }

    div[data-x-current] ul {
      list-style-type: none;

      margin: auto;
      padding: 0;
    }

    div[data-x-current] ul > li {
      padding: 0.5rem 0 0 0;

      text-align: center;
    }

    div[data-x-current] #alternateScale {
      cursor: pointer;
      border-bottom: 1px dotted;
    }

    #temperature {
      font-size: 1.25rem;
      font-weight: bold;
    }

    [data-x-current-dateTime] {
      text-decoration: underline;
    }
  </style>

  <div data-x-current>
    <ul>
      <li><span id="time"></span></li>
      <li><span id="temperature"></span>°<span id="primaryScale"></span> / <span><a id="alternateScale"></a></span></li>
    </ul>
    <div>
      <img data-x-current-icon alt="" id="icon"></img>
    </div>
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
    this.refresh().then(currentWeather => {
      this.render(currentWeather)
      // set this as a class property to be used later
      this.currentWeather = currentWeather

      this.primaryScale = this.shadowRoot.querySelector('#primaryScale')
      this.alternateScale = this.shadowRoot.querySelector('#alternateScale')

      this.primaryScale.textContent = this.scale
      this.alternateScale.textContent = this.scale === 'C' ? 'F' : 'C'

      this.alternateScale.onclick = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
        // Sometimes people use innerHTML to retrieve or write text inside an element.
        // textContent has better performance because its value is not parsed as HTML.
        // Moreover, using textContent can prevent XSS attacks.
        this.scale = this.alternateScale.textContent

        // check for xForecast and set the scale attribute
        const xForecast = this.parentElement.querySelector('x-forecast')

        if (xForecast) {
          xForecast.setAttribute('scale', this.primaryScale.textContent)
        }
      }
    })
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // handle the scale attribute change
    if (
      attrName === 'scale' &&
      oldVal !== newVal &&
      this.alternateScale &&
      this.primaryScale
    ) {
      if (newVal === 'C') {
        this.alternateScale.textContent = 'F'
        this.primaryScale.textContent = newVal
      }

      if (newVal === 'F') {
        this.alternateScale.textContent = 'C'
        this.primaryScale.textContent = newVal
      }

      this.render(this.currentWeather)
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

  set iconAlt(iconAlt) {
    this.shadowRoot.querySelector('#icon').setAttribute('alt', iconAlt)
  }

  set iconSrc(iconSrc) {
    this.shadowRoot.querySelector('#icon').src = iconSrc
  }

  get scale() {
    return this.getAttribute('scale')
  }

  set scale(scale) {
    this.setAttribute('scale', scale)
  }

  set temperature(temperature) {
    this.setAttribute('temperature', temperature)

    this.shadowRoot.querySelector('#temperature').textContent = temperature
  }

  set timestamp(timestamp) {
    this.shadowRoot.querySelector('#time').innerHTML = `
      <div data-x-current-dateTime>
        ${to12HourTime(
          dateTime(unixEpochToDate(timestamp))
            .H(':')
            .M(':')
            .S()
            .getResults()
        )} (${dateTime(new Date).m('-').d().getResults()}):
      </div>
    `
  }

  _getCurrentWeather({ appid, host, location }) {
    if (appid && host && location) {

      return this._serviceHandler({ appid, host, location }).then(result => {
        const { coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod } = result // eslint-disable-line no-unused-vars

        return {
          iconAlt: weather[0].description,
          iconSrc: weather[0].icon,
          temperature: {
            kelvin: main.temp,
            celsius: convertTemperature(main.temp, 'kToC'),
            fahrenheit: convertTemperature(main.temp, 'kToF')
          },
          timestamp: dt
        }
      })
    }
  }

  _serviceHandler({ appid, host, location }) {
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

  refresh() {
    const config = {
      appid: this.parentElement.getAttribute('appid'),
      host: this.parentElement.getAttribute('host'),
      location: this.parentElement.getAttribute('location')
    }

    return this._getCurrentWeather(config)
  }

  render({ iconAlt, iconSrc, temperature, timestamp }) {
    this.temperature = Number.parseFloat(temperature[this.scale === 'C' ? 'celsius' : 'fahrenheit']).toFixed(2)
    this.iconAlt = iconAlt
    this.iconSrc = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${iconSrc}.png`
    // this.iconSrc = `https://openweathermap.org/img/w/${iconSrc}.png`
    this.timestamp = timestamp
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-current',
  element: XCurrent
})

export default XCurrent
