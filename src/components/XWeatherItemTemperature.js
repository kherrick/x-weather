import { html, css, LitElement } from 'lit-element'

const XWeatherItemTemperature = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      #min,
      #minScale {
        color: var(--x-weather-item-temperature-min-color, rgb(0, 0, 128));
        font-size: var(--x-weather-item-temperature-font-size, 0.75rem);
        font-weight: var(--x-weather-item-temperature-font-weight, bold);
      }

      #max,
      #maxScale {
        font-size: var(--x-weather-item-temperature-max-color, 1.25rem);
        font-weight: var(--x-weather-item-temperature-font-weight, bold);
      }
    `
  }

  static get properties() {
    return {
      mintemp: { type: Number },
      maxtemp: { type: Number },
      minscale: { type: String },
      maxscale: { type: String }
    }
  }

  render() {
    return html`
      <span id="max">${this.maxtemp}</span>°<span id="maxScale" data-scale>${this.maxscale}</span>&nbsp;
      <span id="min">${this.mintemp}</span>°<span id="minScale" data-scale>${this.minscale}</span>
    `
  }
}

if (!customElements.get('x-weather-item-temperature')) {
  customElements.define('x-weather-item-temperature', XWeatherItemTemperature)
}

export { XWeatherItemTemperature }
export default XWeatherItemTemperature
