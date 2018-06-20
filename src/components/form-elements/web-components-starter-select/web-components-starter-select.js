import { generateUUID, getElementById, loadComponent } from '../../../utilities.js'
import template from './template.js'

const WebComponentsStarterSelect = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template({ options: this.options, type: this.type })

    this.attachShadow({ mode: 'open' }).appendChild(container)

    const selectNode = getElementById(`${this.type}`, container)

    selectNode.addEventListener(
      'change',
      this.inputValueChange.bind(this)
    )
  }

  static get observedAttributes() {
    return [ 'options, type', 'value' ]
  }

  get options() {
    let result

    try {
      result = JSON.parse(unescape(this.getAttribute('options')))
    } catch (e) {
      result = []
    }

    return result
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
    this.shadowRoot.querySelector('select').value = value
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
  tagName: 'web-components-starter-select',
  element: WebComponentsStarterSelect
})

export default WebComponentsStarterSelect
