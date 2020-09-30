import { html, css, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import '../components/XWeatherItem'
import '../components/XDateTime'

import './XCurrentTemperature'

const XCurrent = class extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: var(--x-current-margin, initial);
      }

      x-date-time {
        text-decoration: var(--x-current-x-date-time, initial);
        --x-date-time-font-size: var(--x-current-x-date-time-font-size, 1.25rem);
        --x-date-time-font-weight: var(--x-current-x-date-time-font-weight, initial);
      }

      x-weather-item {
        margin-bottom: 0.5rem;

        --x-weather-item-display: var(--x-current-x-weather-item-display, initial);
        --x-weather-item-flex-direction: var(--x-current-x-weather-item-flex-direction, initial);
        --x-weather-item-text-align: var(--x-current-x-weather-item-text-align, initial);
      }

      x-current-temperature {
        --x-current-temperature-font-size: var(--x-current-x-current-temperature-font-size, 1.25rem);
        --x-current-temperature-font-weight: var(--x-current-x-current-temperature-font-weight, bold);
      }
    `
  }

  static get properties() {
    return {
      currentweather: { type: Object },
      primaryscale: { type: String }
    }
  }

  stateChanged({ weather }) {
    this.currentweather = weather.current
    this.primaryscale = this.primaryscale || weather.preferences.primaryScaleCurrent
  }

  render() {
    return html`
      <x-weather-item iconalt="${this.currentweather.iconAlt}" iconsrc="${this.currentweather.iconSrc}">
        <x-date-time ?displayTime="${true}" slot="x-date-time" timestamp="${this.currentweather.timestamp}"></x-date-time>
        <x-current-temperature
          primaryscale=${this.primaryscale}
          slot="x-weather-item-temperature"
        ></x-current-temperature>
      </x-weather-item>
    `
  }
}

if (!customElements.get('x-current')) {
  customElements.define('x-current', XCurrent)
}

export { XCurrent }
export default XCurrent
