import { html, css, LitElement } from 'lit-element'

const XWeatherItemTemperature = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      #day,
      #dayScale {
        font-size: 1.25rem;
        font-weight: bold;
      }

      #night,
      #nightScale {
        color: rgb(0, 0, 128);
        font-size: 0.75rem;
        font-weight: bold;
      }
    `
  }

  static get properties() {
    return {
      daytemp: { type: Number },
      nighttemp: { type: Number },
      dayscale: { type: String },
      nightscale: { type: String }
    }
  }

  render() {
    return html`
      <span id="day">${this.daytemp}</span>°<span id="dayScale" data-scale>${this.dayscale}</span>&nbsp;
      <span id="night">${this.nighttemp}</span>°<span id="nightScale" data-scale>${this.nightscale}</span>
    `
  }
}

if (!customElements.get('x-weather-item-temperature')) {
  customElements.define('x-weather-item-temperature', XWeatherItemTemperature)
}

export { XWeatherItemTemperature }
export default XWeatherItemTemperature
