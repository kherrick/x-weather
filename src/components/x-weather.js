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

  static get observedAttributes() {
    return [ 'location' ]
  }

  connectedCallback() {
    setTextContent(this.shadowRoot, 'location', this.location)
  }

  get appid() {
    return this.getAttribute('appid')
  }

  get host() {
    return this.getAttribute('host')
  }

  get location() {
    return this.getAttribute('location')
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-weather',
  element: XWeather
})

export default XWeather
