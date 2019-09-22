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

  stateChanged({ weather }) {
    this.forecastweather = weather.forecast
    this.primaryscale = weather.forecast.primaryScale || this.primaryscale
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
              <x-weather-item iconalt="${forecast.weather[0].description}" iconsrc="${forecast.weather[0].icon}">
                <x-date-time datetimefmt="LLL dd (EEE)" slot="x-date-time" timestamp="${forecast.dt}"></x-date-time>
                <x-weather-item-temperature
                  dayscale="${this.primaryscale.toUpperCase()}"
                  daytemp="${this.setTemp(forecast.temp.day, this.primaryscale)}"
                  nightscale="${this.primaryscale.toUpperCase()}"
                  nighttemp="${this.setTemp(forecast.temp.night, this.primaryscale)}"
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
