import template from './template.js'

export default class extends HTMLElement {
  constructor() {
    super()
    const container = document.createElement('div')
    container.innerHTML = template({ type: this.type })

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(container)
    const inputNode1 = shadowRoot.querySelector(`#${this.type}RadioOne`)
    const inputNode2 = shadowRoot.querySelector(`#${this.type}RadioTwo`)

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