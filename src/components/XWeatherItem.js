import { html, css, LitElement } from 'lit-element'

const XWeatherItem = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: var(--x-weather-item-display, block);
        flex-direction: var(--x-weather-item-flex-direction, initial);
        text-align: var(--x-weather-item-text-align, initial);
        justify-content: space-evenly;
        align-items: center;
      }

      img {
        display: var(--x-weather-item-icon-display, block);
        height: var(--x-weather-item-icon-height, 7.5rem);
        margin: var(--x-weather-item-icon-margin, auto);
        width: var(--x-weather-item-icon-width, 7.5rem);
      }
    `
  }

  static get properties() {
    return {
      datetime: { type: Number },
      iconalt: { type: String },
      iconsrc: { type: String }
    }
  }

  render() {
    // const iconurl = `https://openweathermap.org/img/w/${this.iconsrc}.png`
    const iconurl = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.iconsrc}.png`

    return html`
      <div>
        <slot name="x-date-time"></slot>
      </div>
      <div>
        <slot name="x-weather-item-temperature"></slot>
      </div>
      <div>
        <img alt="${this.iconalt}" src="${iconurl}" />
      </div>
    `
  }
}

if (!customElements.get('x-weather-item')) {
  customElements.define('x-weather-item', XWeatherItem)
}

export { XWeatherItem }
export default XWeatherItem
