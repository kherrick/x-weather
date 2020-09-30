import { html, css, LitElement } from 'lit-element'
import { convertTemperature } from '../utilities.js'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { swapPrimaryScaleCurrent, swapPrimaryScaleForecast } from '../dispatchers/dispatchers'

const XCurrentTemperature = class extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        align-items: var(--x-current-temperature-align-items, center);
        display: var(--x-current-temperature-display, block);
        flex-direction: var(--x-current-temperature-flex-direction, initial);
        height: var(--x-current-temperature-height, initial);
        justify-content: var(--x-current-temperature-justify-content, initial);
      }

      #alternateScale {
        cursor: pointer;
        border-bottom: 1px dotted;
      }

      #temperature {
        font-size: var(--x-current-temperature-font-size, initial);
        font-weight: var(--x-current-temperature-font-weight, initial);
      }
    `
  }

  static get properties() {
    return {
      celsius: { type: Number },
      fahrenheit: { type: Number },
      primaryscale: { type: String }
    }
  }

  stateChanged({ weather }) {
    this.celsius = String(weather.current.temperature.celsius).slice(0, 5)
    this.fahrenheit = String(weather.current.temperature.fahrenheit).slice(0, 5)
    this.primaryscale = weather.current.primaryScale || this.primaryscale
  }

  constructor() {
    super()

    this.celsius = '10.00'
    this.fahrenheit = '50.00'
    this.primaryscale = 'c'
  }

  _handleScaleSwap(scale) {
    return () => {
      swapPrimaryScaleCurrent(scale)
      swapPrimaryScaleForecast(scale)
    }
  }

  render() {
    return this.primaryscale === 'c'
      ? html`
          <div>
            <span id="temperature">${this.celsius}</span> °<span id="primaryScale">C</span>
          </div>
          <div>
            <span>${this.fahrenheit} °<a id="alternateScale" @click=${this._handleScaleSwap('f')}>F</a></span>
          </div>
        `
      : html`
          <div>
            <span id="temperature">${this.fahrenheit}</span> °<span id="primaryScale">F</span>
          </div>
          <div>
            <span>${this.celsius} °<a id="alternateScale" @click=${this._handleScaleSwap('c')}>C</a></span>
          </div>
        `
  }
}

if (!customElements.get('x-current-temperature')) {
  customElements.define('x-current-temperature', XCurrentTemperature)
}

export { XCurrentTemperature }
export default XCurrentTemperature
