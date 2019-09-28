import { html, css, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { updateLocation } from '../dispatchers/dispatchers'

import '@material/mwc-dialog'

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
      location: { type: Object },
      locations: { type: Object }
    }
  }

  handleHeaderClick(event) {
    this.shadowRoot.querySelector('mwc-dialog').setAttribute('open', true)
  }

  handleUpdateLocation({ latitude, longitude, placename }) {
    return function(event) {
      this.shadowRoot.querySelector('mwc-dialog').removeAttribute('open')

      updateLocation({ placename, latitude, longitude })
    }
  }

  stateChanged({ weather }) {
    this.location = weather.preferences.location || this.location
    this.locations = weather.preferences.locations || this.locations
  }

  render() {
    return html`
      <mwc-dialog title="Choose Location">
        <ul>
          ${this.locations.map(location => {
            return html`
              <li><button @click="${this.handleUpdateLocation(location)}">${location.placename}</button></li>
            `
          })}
        </ul>
        <!--
        <button dialogAction="ok" slot="primaryAction">
          OK
        </button>
        -->
        <button dialogAction="cancel" slot="secondaryAction">
          Cancel
        </button>
      </mwc-dialog>
      <header @click="${this.handleHeaderClick}"><strong>${this.location.placename}</strong></header>
    `
  }
}

if (!customElements.get('x-location')) {
  customElements.define('x-location', XLocation)
}

export { XLocation }
export default XLocation
