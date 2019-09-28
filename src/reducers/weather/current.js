import { createReducer } from '../utilities'
import { CURRENT_WEATHER_UPDATE } from '../../actions/types'

export default createReducer(
  {},
  {
    [CURRENT_WEATHER_UPDATE](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
)
