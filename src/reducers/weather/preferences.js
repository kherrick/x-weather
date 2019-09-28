import { createReducer } from '../utilities'
import {
  CURRENT_WEATHER_UPDATE,
  LOCATION_UPDATE,
  PRIMARY_SCALE_CURRENT_SWAP,
  PRIMARY_SCALE_FORECAST_SWAP
} from '../../actions/types'

export default createReducer(
  {},
  {
    [LOCATION_UPDATE](state, { payload }) {
      return {
        ...state,
        location: {
          ...state.location,
          ...payload
        }
      }
    },
    [PRIMARY_SCALE_FORECAST_SWAP](state, { payload }) {
      return {
        ...state,
        primaryScaleForecast: payload
      }
    },
    [PRIMARY_SCALE_CURRENT_SWAP](state, { payload }) {
      return {
        ...state,
        primaryScaleCurrent: payload
      }
    }
  }
)
