import { loadComponent } from '../../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    [data-x-weather-bottom] {
      display: grid;
      grid-area: x-weather-bottom;
      grid-template-columns: repeat( auto-fit, minmax(14.28%, 1fr) );
      grid-template-rows: 100%;
      grid-template-areas: ". . . . . . .";
    }

    [data-x-weather-bottom] > div {
      border: 1px solid black;
    }

    ::slotted(div) {
      border: 1px solid black;
    }
  </style>

  <div data-x-weather-bottom>
    <slot></slot>
  </div>
`

const XWeatherBottom = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-weather-bottom',
  element: XWeatherBottom
})

export default XWeatherBottom
