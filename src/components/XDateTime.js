import { html, css, LitElement } from 'lit-element'
import { format, fromUnixTime } from 'date-fns'

const XDateTime = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `
  }

  static get properties() {
    return {
      datetimefmt: { type: String },
      timestamp: { type: String }
    }
  }

  constructor() {
    super()

    this.datetimefmt = 'yyyy-MM-dd @ h:mm:ss a'
    this.timestamp = '0'
  }

  render() {
    return html`
      ${format(new Date(fromUnixTime(this.timestamp)), this.datetimefmt)}
    `
  }
}

if (!customElements.get('x-date-time')) {
  customElements.define('x-date-time', XDateTime)
}

export { XDateTime }
export default XDateTime
