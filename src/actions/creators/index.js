import { SWAP_PRIMARY_SCALE_CURRENT, SWAP_PRIMARY_SCALE_FORECAST } from '../types'

export const swapPrimaryScaleCurrent = primaryScale => ({ type: SWAP_PRIMARY_SCALE_CURRENT, payload: primaryScale })
export const swapPrimaryScaleForecast = primaryScale => ({ type: SWAP_PRIMARY_SCALE_FORECAST, payload: primaryScale })
