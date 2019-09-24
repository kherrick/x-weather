import { createReducer } from '../utilities'
import { SWAP_PRIMARY_SCALE_CURRENT, SWAP_PRIMARY_SCALE_FORECAST } from '../../actions/types'

export default createReducer(
  {},
  {
    [SWAP_PRIMARY_SCALE_FORECAST](state, { payload }) {
      return {
        ...state,
        primaryScaleForecast: payload
      }
    },
    [SWAP_PRIMARY_SCALE_CURRENT](state, { payload }) {
      return {
        ...state,
        primaryScaleCurrent: payload
      }
    }
  }
)
