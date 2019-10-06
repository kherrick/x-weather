import { html, css, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from './store/configureStore'

import { getCurrentWeather, getForecastWeather, updateLocation } from './dispatchers/dispatchers'

import './containers/XCurrent'
import './containers/XForecast'
import './containers/XLocation'

const XWeather = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `
  }

  static get properties() {
    return {
      appid: { type: String, reflect: false },
      host: { type: String, reflect: true },
      latitude: { type: Number, reflect: true },
      longitude: { type: Number, reflect: true },
      placename: { type: String, reflect: true }
    }
  }

  constructor() {
    super()

    this.appid = undefined
    this.host = 'api.openweathermap.org'
    this.latitude = undefined
    this.longitude = undefined
    this.placename = undefined
  }

  _hasRequiredAttributes() {
    return this.appid && this.host && this.latitude && this.longitude && this.placename
  }

  firstUpdated() {
    if (this._hasRequiredAttributes()) {
      updateLocation({
        latitude: this.latitude,
        longitude: this.longitude,
        placename: this.placename
      })

      getCurrentWeather({
        appid: this.appid,
        host: this.host
      })

      getForecastWeather({
        appid: this.appid,
        host: this.host
      })
    }
  }

  render() {
    return this._hasRequiredAttributes()
      ? html`
          <x-location></x-location>
          <slot></slot>
        `
      : html`
          <div>
            Please make sure required attributes (appid, host, latitude, longitude, placename) are set on
            &lt;x-weather&gt;.
          </div>
        `
  }
}

if (!customElements.get('x-weather')) {
  customElements.define('x-weather', XWeather)
}

export { XWeather }
export default XWeather
