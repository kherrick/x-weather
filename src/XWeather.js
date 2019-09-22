import { html, css, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from './store/configureStore'
import { getCurrentWeather, getForecastWeather } from './dispatchers/dispatchers'

import './containers/XCurrent'
import './containers/XForecast'

const XWeather = class extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      header {
        font-size: var(--x-weather-header-font-size, 1.5rem);
        text-align: center;
      }
    `
  }

  static get properties() {
    return {
      appid: { type: String, reflect: false },
      host: { type: String, reflect: true },
      location: { type: String, reflect: true }
    }
  }

  constructor() {
    super()

    this.appid = undefined
    this.host = 'api.openweathermap.org'
    this.location = 'Detroit, Michigan'
  }

  render() {
    const hasRequiredAttributes = this.appid && this.host && this.location

    if (hasRequiredAttributes) {
      getCurrentWeather({ appid: this.appid, host: this.host, location: this.location })
      getForecastWeather({ appid: this.appid, host: this.host, location: this.location })
    }

    return hasRequiredAttributes
      ? html`
          <header><strong>${this.location}</strong></header>
          <slot></slot>
        `
      : html`
          <div>Please make sure required attributes (appid, host, and location) are set on &lt;x-weather&gt;.</div>
        `
  }
}

if (!customElements.get('x-weather')) {
  customElements.define('x-weather', XWeather)
}

export { XWeather }
export default XWeather
