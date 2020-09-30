import { html, css, LitElement } from 'lit-element'
import { format, fromUnixTime } from 'date-fns'

const XDateTime = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: var(--x-date-time-display, block);
        flex-direction: var(--x-date-time-flex-direction, initial);
        font-size: var(--x-date-time-font-size, initial);
        font-weight: var(--x-date-time-font-weight, initial);
      }
    `
  }

  static get properties() {
    return {
      displayTime: { type: Boolean },
      datefmt: { type: String },
      timefmt: { type: String },
      timestamp: { type: String }
    }
  }

  constructor() {
    super()

    this.displayTime = false
    this.datefmt = 'yyyy-MM-dd'
    this.timefmt = 'h:mm:ss a'
    this.timestamp = '0'
  }

  render() {
    const timestamp = new Date(fromUnixTime(this.timestamp))
    const date = format(timestamp, this.datefmt)
    const time = format(timestamp, this.timefmt)

    return html`
      <div>
        ${date}
      </div>
      ${this.displayTime
        ? html`
          <div>
            ${time}
          </div>
        `
        : null
      }
    `
  }
}

if (!customElements.get('x-date-time')) {
  customElements.define('x-date-time', XDateTime)
}

export { XDateTime }
export default XDateTime
