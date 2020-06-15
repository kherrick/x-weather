import { html, css, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import '../components/XDateTime'
import '../components/XWeatherItem'
import '../components/XWeatherItemTemperature'

import { convertTemperature } from '../utilities'

const XForecast = class extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: var(--x-forecast-display, grid);

        grid-template-columns: var(
          --x-forecast-date-container-grid-template-columns,
          repeat(auto-fill, minmax(12rem, 1fr))
        );
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
      days: { type: Number, reflect: true },
      forecastweather: { type: Object, reflect: false },
      primaryscale: { type: String, reflect: true }
    }
  }

  getIcon(src) {
    const icon = src[0].icon

    return `${icon.slice(0, 2)}d`
  }

  stateChanged({ weather }) {
    this.forecastweather = weather.forecast
    this.primaryscale = this.primaryscale || weather.preferences.primaryScaleCurrent
  }

  setTemp(temp, scale) {
    const returnTemp = scale === 'f' ? convertTemperature(temp, 'cToF') : temp

    return String(returnTemp).slice(0, 4)
  }

  render() {
    return html`
      ${Object.keys(this.forecastweather).map(key => {
        const forecast = this.forecastweather[key]

        return forecast.weather && key < this.days
          ? html`
              <x-weather-item iconalt="${forecast.weather[0].description}" iconsrc="${this.getIcon(forecast.weather)}">
                <x-date-time datetimefmt="LLL dd (EEE)" slot="x-date-time" timestamp="${forecast.dt}"></x-date-time>
                <x-weather-item-temperature
                  minscale="${this.primaryscale.toUpperCase()}"
                  mintemp="${this.setTemp(forecast.temp.min, this.primaryscale)}"
                  maxscale="${this.primaryscale.toUpperCase()}"
                  maxtemp="${this.setTemp(forecast.temp.max, this.primaryscale)}"
                  slot="x-weather-item-temperature"
                ></x-weather-item-temperature>
              </x-weather-item>
            `
          : ''
      })}
    `
  }
}

if (!customElements.get('x-forecast')) {
  customElements.define('x-forecast', XForecast)
}

export { XForecast }
export default XForecast
