import { html, css, LitElement } from 'lit-element'

const XWeatherItem = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      img {
        display: var(--x-weather-item-icon-display, block);
        height: var(--x-weather-item-icon-height, 7.5rem);
        margin: var(--x-weather-item-icon-margin, auto);
        width: var(--x-weather-item-icon-width, 7.5rem);
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      ul > li {
        text-align: center;
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
      <ul>
        <li>
          <slot name="x-date-time"></slot>
        </li>
        <li>
          <slot name="x-weather-item-temperature"></slot>
        </li>
        <li>
          <img alt="${this.iconalt}" src="${iconurl}"></img>
        </li>
      </ul>
    `
  }
}

if (!customElements.get('x-weather-item')) {
  customElements.define('x-weather-item', XWeatherItem)
}

export { XWeatherItem }
export default XWeatherItem
