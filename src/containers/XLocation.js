import { html, css, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

const XLocation = class extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      header {
        font-size: var(--x-location-header-font-size, 1.5rem);
        text-align: center;
      }

      ul {
        list-style: none;
        padding: none;
      }

      ul > li {
        margin-top: 1rem;
      }
    `
  }

  static get properties() {
    return {
      location: { type: Object }
    }
  }

  stateChanged({ weather }) {
    this.location = weather.preferences.location || this.location
  }

  render() {
    return html`
      <header><strong>${this.location.placename}</strong></header>
    `
  }
}

if (!customElements.get('x-location')) {
  customElements.define('x-location', XLocation)
}

export { XLocation }
export default XLocation
