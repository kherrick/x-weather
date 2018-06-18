// get components
import WebComponentsStarterBooleanRadio from './components/form-elements/web-components-starter-boolean-radio/web-components-starter-boolean-radio.js'
import WebComponentsStarterInput from './components/form-elements/web-components-starter-input/web-components-starter-input.js'
import WebComponentsStarterSelect from './components/form-elements/web-components-starter-select/web-components-starter-select.js'

import WebComponentsStarterContainer from './components/web-components-starter-container.js'

// define components (do the container first)
WebComponentsStarterContainer()

WebComponentsStarterBooleanRadio()
WebComponentsStarterInput()
WebComponentsStarterSelect()

export default {
  WebComponentsStarterBooleanRadio,
  WebComponentsStarterContainer,
  WebComponentsStarterInput,
  WebComponentsStarterSelect,
}
