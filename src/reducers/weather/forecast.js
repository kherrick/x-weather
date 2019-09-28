import { createReducer } from '../utilities'
import { FORECAST_WEATHER_UPDATE } from '../../actions/types'

export default createReducer(
  {},
  {
    [FORECAST_WEATHER_UPDATE](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
)
