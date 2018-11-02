import { loadComponent } from '../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    div[data-x-weather] #location {
      border: 0;
      font-style: italic;
      margin: 0 0 0 0.5rem;
      padding: 0;
    }
  </style>

  <div data-x-weather>
    <div><input id="location"></input></div>

    <slot></slot>
  </div>
`

const XWeather = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }

  connectedCallback() {
    this._upgradeProperty('appid')
    this._upgradeProperty('host')
    this._upgradeProperty('location')

    this.xCurrent = this.querySelector('x-current')
    this.xForecast = this.querySelector('x-forecast')

    this._renderLocation(this.location)

    const location = this.shadowRoot.querySelector('#location')

    location.addEventListener('change', () => {
      this.location = location.value

      this.xCurrent.refresh().then(currentWeather => {
        this.xCurrent.render(currentWeather)
      })

      this.xForecast.refresh().then(currentForecast => {
        this.xForecast.render(currentForecast)
      })
    })
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal && attrName === 'appid' || attrName === 'host' || attrName === 'location') {
      if (attrName === 'location') {
        this._renderLocation(this.location)
      }

      if (this.xCurrent) {
        this.xCurrent.setAttribute(attrName, newVal)
      }

      if (this.xForecast) {
        this.xForecast.setAttribute(attrName, newVal)
      }
    }
  }

  static get observedAttributes() {
    return [ 'appid', 'host', 'location' ]
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

  _renderLocation(location) {
    this.shadowRoot.querySelector('#location').value = location
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop]

      delete this[prop]

      this[prop] = value
    }
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-weather',
  element: XWeather
})

export default XWeather
