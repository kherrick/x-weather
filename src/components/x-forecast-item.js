import { loadComponent } from '../utilities.js'

const template = `
  <style>
    :host {
      display: block;

      --icon-display: inherit
    }

    [data-icon] {
      display: var(--icon-display);
    }

    ul[data-x-forecast-item] {
      list-style-type: none;

      padding: 0 0 1rem 1.5rem;
    }

    ul[data-x-forecast-item] > li {
      padding: 0.5rem 0 0 0;
    }
  </style>

  <ul data-x-forecast-item>
    <li>
      <u id="forecastDate"></u>
    </li>
    <li data-icon>
      <img id="icon" />
    </li>
    <li>Day: <span id="day"></span>°<span data-scale></span></li>
    <li>Night: <span id="night"></span>°<span data-scale></span></li>
  </ul>
`

const XForecastItem = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case 'day':
        this.shadowRoot.getElementById('day').textContent = newVal
        break;
      case 'description':
        this.shadowRoot.getElementById('icon').alt = newVal
        break;
      case 'forecast-date':
        this.shadowRoot.getElementById('forecastDate').textContent = newVal
        break;
      case 'icon':
        this.shadowRoot.getElementById('icon').src = newVal
        break;
      case 'night':
        this.shadowRoot.getElementById('night').textContent = newVal
        break;
      case 'scale':
        this.shadowRoot.querySelectorAll('[data-scale]').forEach(element => {
          element.textContent = newVal
        })
        break;
    }
  }

  static get observedAttributes() {
    return [ 'day', 'description', 'forecast-date', 'icon', 'night', 'scale' ]
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'x-forecast-item',
  element: XForecastItem
})

export default XForecastItem
