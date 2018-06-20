import { generateUUID, getElementById, loadComponent } from '../../../utilities.js'
import template from './template.js'

const WebComponentsStarterInput = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template({ type: this.type })

    this.attachShadow({ mode: 'open' }).appendChild(container)

    const inputNode = getElementById(`${this.type}`, container)

    inputNode.addEventListener(
      'change',
      this.inputValueChange.bind(this)
    )
  }

  static get observedAttributes() {
    return ['type', 'value']
  }

  get type() {
    let type = this.getAttribute('type')

    if (!type) {
      type = generateUUID()

      this.setAttribute('type', type)
    }

    return type
  }

  set type(type) {
    this.setAttribute('type', type)
  }

  get value() {
    return this.getAttribute('value')
  }

  set value(value) {
    this.shadowRoot.querySelector('input').value = value
    this.setAttribute('value', value)
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // prevent infinite loop
    if (oldVal !== newVal) {
      this[name] = newVal
    }
  }

  inputValueChange(event) {
    this.value = event.target.value
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'web-components-starter-input',
  element: WebComponentsStarterInput
})

export default WebComponentsStarterInput
