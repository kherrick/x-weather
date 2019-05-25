import { loadComponent } from '../utilities.js'

const template = `
  <style>
    :host {
      display: block;

      --icon-display: inherit
    }

    [data-x-forecast-icon] {
      /* defaulted for ie11 */

      height: 7.5rem;

      width: 7.5rem;
      margin: auto;
    }

    ul[data-x-forecast-item] {
      list-style-type: none;

      padding: 0 0 1rem 1.5rem;
    }

    ul[data-x-forecast-item] > li {
      padding: 0.5rem 0 0 0;
      text-align: center;
    }

    #day, #dayScale {
      font-size: 1.25rem;
      font-weight: bold;
    }

    #night, #nightScale {
      font-size: 0.75rem;
      font-weight: bold;
      color: rgb(0, 0, 128);
    }
  </style>

  <ul data-x-forecast-item>
    <li>
      <u id="forecastDate"></u>
    </li>
    <li><span id="day"></span>°<span id="nightScale" data-scale></span>&nbsp;<span id="night"></span>°<span id="nightScale" data-scale></span></li>
    <li data-x-forecast-icon>
      <img id="icon" />
    </li>
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
        this.shadowRoot.getElementById('day').textContent = newVal.slice(0, -1)
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
        this.shadowRoot.getElementById('night').textContent = newVal.slice(0, -1)
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
