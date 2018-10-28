import { loadComponent } from '../../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    [data-x-weather-middle] {
      display: grid;
      grid-area: x-weather-middle;
      grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) );
      grid-template-rows: 100%;
      grid-template-areas: ". .";
    }

    [data-x-weather-middle] > div {
      border: 1px solid black;
      padding: 1rem;
    }

    ::slotted(div) {
      border: 1px solid black;
      padding: 1rem;
    }
  </style>

  <div data-x-weather-middle>
    <slot></slot>
  </div>
`

const XWeatherMiddle = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-weather-middle',
  element: XWeatherMiddle
})

export default XWeatherMiddle
