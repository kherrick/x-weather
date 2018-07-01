import { loadComponent } from '../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    [data-x-weather] {
      border-radius: 1rem;
      border: 0.0625rem solid #000;
      margin: 1rem;
      padding: 1rem;
    }
  </style>

  <div data-x-weather>
    <slot name="location"></slot>: <span id="temp"></span>°F
  </div>
`

const XWeather = class extends HTMLElement {
  constructor() {
    super()

    this.getForecast = this.getForecast.bind(this)
    this.getCurrentTemps = this.getCurrentTemps.bind(this)
    this.setTextContent = this.setTextContent.bind(this)

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }

  static get observedAttributes() {
    return [ 'temp' ]
  }

  get appid() {
    return this.getAttribute('appid')
  }

  get host() {
    return this.getAttribute('host')
  }

  get temp() {
    return this.getAttribute('temp')
  }

  set temp(temp) {
    this.setAttribute('temp', temp)
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // prevent infinite loop
    if (oldVal !== newVal) {
      this.temp = newVal
    }
  }

  connectedCallback() {
    const location = this.shadowRoot.querySelector('slot').assignedNodes()[0].innerText
    const getCurrentTemps = this.getCurrentTemps({
      appid: this.appid,
      host: this.host,
      location
    })

    getCurrentTemps.then(({ fahrenheit }) => {
      this.setAttribute(
        'temp',
        fahrenheit
      )

      this.setTextContent(fahrenheit)
    })

    this.getForecast({
      appid: this.appid,
      host: this.host,
      location
    })
  }

  getCurrentTemps({appid, host, location}) {
    const url = `https://${host}/data/2.5/weather?q=${location}&appid=${appid}`

    return fetch(url, {
      method: 'GET'
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(json => {
      const fixture = {
        main: {
          temp: 273
        }
      }

      const { coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod } = json || fixture
      const { temp } = main

      return {
        kelvin: temp,
        celsius: temp - 273,
        fahrenheit: ((9 / 5) * (temp - 273)) + 32
      }
    })
  }

  getForecast({appid, host, location}) {
    const url = `https://${host}/data/2.5/forecast/daily?q=${location}&mode=json&units=metric&cnt=14&appid=${appid}`

    return fetch(url, {
      method: 'GET'
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(json => {
      console.log('forecast result: ', json) // eslint-disable-line no-console

      return json
    })
  }

  setTextContent(temp) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
    // Sometimes people use innerHTML to retrieve or write text inside an element.
    // textContent has better performance because its value is not parsed as HTML.
    // Moreover, using textContent can prevent XSS attacks.
    this.shadowRoot.querySelector('#temp').textContent = temp
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-weather',
  element: XWeather
})

export default XWeather
