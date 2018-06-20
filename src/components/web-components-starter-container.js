import { getElementById, loadComponent, } from '../utilities.js'

const template = `
  <style>
    :host {
      display: block;
    }

    h1 {
      padding-bottom: 1rem;
    }
  </style>

  <h1>Web Components Starter!</h1>
  <form>
    <web-components-starter-select
      tabindex="1"
      type="selectOptionOne"
      options=${escape(`[{
        "text": "Select One",
        "value": ""
      },{
        "text": "Option One",
        "value": "optionOne"
      },{
        "text": "Option Two",
        "value": "optionTwo"
      },{
        "text": "Option Three",
        "value": "optionThree"
      }]`)}
    >
      <span slot="label">Choose an option</span>
    </web-components-starter-select>

    <web-components-starter-input tabindex="2" type="inputOne">
      <span slot="label">An input</span>
    </web-components-starter-input>

    <web-components-starter-boolean-radio tabindex="3">
      <span slot="label">A choice</span>
    </web-components-starter-boolean-radio>

    <button id="submitButton" tabindex="4" type="submit">Submit</button>
  </form>
`
const WebComponentsStarterContainer = class extends HTMLElement {
  constructor() {
    super()

    this.service = this.service.bind(this)
    this.customPreventDefault = this.customPreventDefault.bind(this)

    const container = document.createElement('div')
    container.innerHTML = template

    this.attachShadow({ mode: 'open' }).appendChild(container)

    const button = getElementById('submitButton', container)

    button.addEventListener('click', this.handleButtonClick.bind(this))
  }

  service({ host, payload }) {
    console.log(`sending to ${host}: `, payload) // eslint-disable-line no-console

    return fetch(`https://${host}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
    .then(json => {
      console.log('result: ', json); // eslint-disable-line no-console
    })
  }

  /**
   * this custom event is really for IE11 - (so the form doesn't post), and we
   * really need a form, so that the radios select properly without a bunch of
   * JS... ¯\_(ツ)_/¯
   */
  customPreventDefault() {
    const customEvent = document.createEvent('CustomEvent')

    customEvent.initCustomEvent('custom', true, true, {})
    customEvent.preventDefault = function () {
      Object.defineProperty(this, 'defaultPrevented', { get: () => true })
    }

    customEvent.preventDefault()
  }

  handleButtonClick(event) {
    if (event) {
      event.preventDefault()
      this.customPreventDefault()

      this.service({
        host: 'example.com',
        payload: {
          selectOptionOne: this.shadowRoot.querySelector('web-components-starter-select[type="selectOptionOne"]').value,
          inputOne: parseInt(this.shadowRoot.querySelector('web-components-starter-input[type="inputOne"]').value),
          booleanOne: Number(this.shadowRoot.querySelector('web-components-starter-boolean-radio').value) === 1
            ? true
            : false
        }
      })
      .catch(err => {
        console.log('error:', err); // eslint-disable-line no-console
      })
    }
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'web-components-starter-container',
  element: WebComponentsStarterContainer
})

export default WebComponentsStarterContainer
