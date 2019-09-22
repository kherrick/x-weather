import { html, css, LitElement } from 'lit-element'
import { convertTemperature } from '../utilities.js'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { swapPrimaryScaleCurrent, swapPrimaryScaleForecast } from '../dispatchers/dispatchers'

const XCurrentTemperature = class extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      #alternateScale {
        cursor: pointer;
        border-bottom: 1px dotted;
      }

      #temperature {
        font-size: 1.25rem;
        font-weight: bold;
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
          <span id="temperature">${this.celsius}</span> °<span id="primaryScale">C</span>
          <span> / ${this.fahrenheit} °<a id="alternateScale" @click=${this._handleScaleSwap('f')}>F</a></span>
        `
      : html`
          <span id="temperature">${this.fahrenheit}</span> °<span id="primaryScale">F</span>
          <span> / ${this.celsius} °<a id="alternateScale" @click=${this._handleScaleSwap('c')}>C</a></span>
        `
  }
}

if (!customElements.get('x-current-temperature')) {
  customElements.define('x-current-temperature', XCurrentTemperature)
}

export { XCurrentTemperature }
export default XCurrentTemperature
