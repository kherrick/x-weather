import { generateUUID } from '../../../utilities.js'
import template from './template.js'

export default class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template({ options: this.options, type: this.type })

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(container)
    const inputNode = shadowRoot.querySelector(`#${this.type}`)

    inputNode.addEventListener(
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
      result = JSON.parse(this.getAttribute('options'))
    } catch (e) {
      result = []
    }

    return result
  }

  get type() {
    return this.getAttribute('type') || generateUUID()
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
