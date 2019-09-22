import { combineReducers } from 'redux'

import current from './current'
import forecast from './forecast'

export default combineReducers({
  current,
  forecast
})
