import { combineReducers } from 'redux'

import current from './current'
import forecast from './forecast'
import preferences from './preferences'

export default combineReducers({
  current,
  forecast,
  preferences
})
