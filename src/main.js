// get components
import WebComponentsStarterBooleanRadio, { load as WebComponentsStarterBooleanRadioLoad } from './components/form-elements/web-components-starter-boolean-radio/web-components-starter-boolean-radio.js'
import WebComponentsStarterContainer, { load as WebComponentsStarterContainerLoad } from './components/web-components-starter-container.js'
import WebComponentsStarterInput, { load as WebComponentsStarterInputLoad } from './components/form-elements/web-components-starter-input/web-components-starter-input.js'
import WebComponentsStarterSelect, { load as WebComponentsStarterSelectLoad } from './components/form-elements/web-components-starter-select/web-components-starter-select.js'

// load components (do the container first)
WebComponentsStarterContainerLoad()

WebComponentsStarterBooleanRadioLoad()
WebComponentsStarterInputLoad()
WebComponentsStarterSelectLoad()

export default {
  WebComponentsStarterBooleanRadio,
  WebComponentsStarterContainer,
  WebComponentsStarterInput,
  WebComponentsStarterSelect,
}
