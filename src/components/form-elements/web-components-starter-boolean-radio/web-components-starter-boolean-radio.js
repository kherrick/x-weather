import { getElementById, loadComponent } from '../../../utilities.js'
import template from './template.js'

const WebComponentsStarterBooleanRadio = class extends HTMLElement {
  constructor() {
    super()

    const container = document.createElement('div')
    container.innerHTML = template({ type: this.type })

    this.attachShadow({ mode: 'open' }).appendChild(container)

    const inputNode1 = getElementById(`${this.type}RadioOne`, container)
    const inputNode2 = getElementById(`${this.type}RadioTwo`, container)

    inputNode1.addEventListener(
      'change',
      this.inputNodeChange.bind(this)
    )

    inputNode2.addEventListener(
      'change',
      this.inputNodeChange.bind(this)
    )
  }

  static get observedAttributes() {
    return ['type', 'value']
  }

  get type() {
    return 'static'
  }

  set type(type) {
    this.setAttribute('type', type)
  }

  get value() {
    return this.getAttribute('value')
  }

  set value(value) {
    this.shadowRoot.querySelector(`#${this.type}RadioOne`).checked =
      Number(value) === 1 ? true : false;

    this.shadowRoot.querySelector(`#${this.type}RadioTwo`).checked =
      Number(value) === 0 ? true : false;

    this.setAttribute('value', value)
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // prevent infinite loop
    if (oldVal !== newVal) {
      this[name] = newVal
    }
  }

  inputNodeChange(event) {
    this.value = event.target.value
  }
}

export const load = () => loadComponent({
  customElements: customElements,
  tagName: 'web-components-starter-boolean-radio',
  element: WebComponentsStarterBooleanRadio
})

export default WebComponentsStarterBooleanRadio
