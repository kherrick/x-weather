import { dateTime, loadComponent, setTextContent, unixEpochToDate } from '../utilities.js'

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

    this.mocked = true

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }

  set timestamp(timestamp) {
    setTextContent(
      this.shadowRoot,
      'time',
      dateTime(unixEpochToDate(timestamp)).H(':').M(':').S().getResults()
    )
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

  connectedCallback() {
    const appid = this.parentElement.getAttribute('appid')
    const host = this.parentElement.getAttribute('host')
    const location = this.parentElement.getAttribute('location')

    if (appid && host && location) {
      // this is a main API call, and ultimately should trigger an attribute change
      this.getCurrentWeather({ appid, host, location }).then(result => {
        const { coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod } = result // eslint-disable-line no-unused-vars
        // set temperature
        const kelvin = main.temp
        const celsius = kelvin - 273
        const fahrenheit = ((9 / 5) * (kelvin - 273)) + 32 // eslint-disable-line no-unused-vars

        this.temperature = Number.parseFloat(celsius).toFixed(2)

        // set icon src
        this.iconSrc = `https://openweathermap.org/img/w/${weather[0].icon}.png`

        // set icon alt
        this.iconAlt = weather[0].description

        // set timestamp
        this.timestamp = dt
      })
    }
  }

  getCurrentWeather({ appid, host, location }) {
    const url = `https://${host}/data/2.5/weather?q=${location}&appid=${appid}` // eslint-disable-line no-unused-vars

    return fetch(url, {
      method: 'GET'
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-current',
  element: XCurrent
})

export default XCurrent
