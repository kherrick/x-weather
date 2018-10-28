import { loadComponent } from '../../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    [data-x-weather-top] {
      display: grid;
      grid-area: x-weather-top;
    }

    [data-x-weather-top] > div {
      margin-bottom: 1rem;
    }

    ::slotted(div) {
      margin-bottom: 1rem;
    }
  </style>

  <div data-x-weather-top>
    <slot></slot>
  </div>
`

const XWeatherTop = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-weather-top',
  element: XWeatherTop
})

export default XWeatherTop
