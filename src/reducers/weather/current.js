import { createReducer } from '../utilities'
import { SWAP_PRIMARY_SCALE_CURRENT, UPDATE_CURRENT_WEATHER } from '../../actions/types'

export default createReducer(
  {},
  {
    [UPDATE_CURRENT_WEATHER](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
)
