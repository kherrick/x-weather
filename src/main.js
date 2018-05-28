import WebComponentsStarterBooleanRadio from './components/form-elements/web-components-starter-boolean-radio/web-components-starter-boolean-radio.js'
import WebComponentsStarterInput from './components/form-elements/web-components-starter-input/web-components-starter-input.js'
import WebComponentsStarterSelect from './components/form-elements/web-components-starter-select/web-components-starter-select.js'
import WebComponentsStarterForm from './components/web-components-starter-container.js'

const loadComponent = () => {
  customElements.define('web-components-starter-boolean-radio', WebComponentsStarterBooleanRadio)
  customElements.define('web-components-starter-input', WebComponentsStarterInput)
  customElements.define('web-components-starter-select', WebComponentsStarterSelect)
  customElements.define('web-components-starter-container', WebComponentsStarterForm)
}

// Conditional loading of polyfill
if (window.customElements) {
  loadComponent()
} else {
  document.addEventListener('WebComponentsReady', () => {
    loadComponent()
  })
}
