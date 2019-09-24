import { createReducer } from '../utilities'
import { SWAP_PRIMARY_SCALE_FORECAST, UPDATE_FORECAST_WEATHER } from '../../actions/types'

export default createReducer(
  {},
  {
    [UPDATE_FORECAST_WEATHER](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
)
