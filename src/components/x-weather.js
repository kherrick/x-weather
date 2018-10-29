import { loadComponent, setTextContent } from '../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    div[data-x-weather] #location {
      margin: 0 0 1rem 1rem;
    }
  </style>

  <div data-x-weather>
    <em><small id="location"></small></em>
    <em><small><a href="#" id="refresh">refresh</a></small></em>
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

    this.shadowRoot.querySelector('#refresh').onclick = function() {
      xForecast.refresh()
      xForecast.render()

      xCurrent.refresh()
      xCurrent.render()
    }
    setTextContent(this.shadowRoot, 'location', this.location)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'appid' || attrName === 'host' || attrName === 'location') {
      if (oldVal !== newVal) {
        if (attrName === 'location') {
          setTextContent(this.shadowRoot, 'location', this.location)
        }

        const xCurrent = this.querySelector('x-current')
        const xForecast = this.querySelector('x-forecast')

        if (xCurrent) {
          xCurrent.setAttribute(attrName, newVal)
        }

        if (xForecast) {
          xForecast.setAttribute(attrName, newVal)
        }
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
