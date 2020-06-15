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
      }

      x-date-time {
        text-decoration: underline;
      }

      x-weather-item {
        margin-bottom: 0.5rem;
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
        <x-date-time slot="x-date-time" timestamp="${this.currentweather.timestamp}"></x-date-time>
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
