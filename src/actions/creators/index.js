import { LOCATION_UPDATE, PRIMARY_SCALE_CURRENT_SWAP, PRIMARY_SCALE_FORECAST_SWAP } from '../types'

export const swapPrimaryScaleCurrent = primaryScale => ({ type: PRIMARY_SCALE_CURRENT_SWAP, payload: primaryScale })
export const swapPrimaryScaleForecast = primaryScale => ({ type: PRIMARY_SCALE_FORECAST_SWAP, payload: primaryScale })

export const updateLocation = location => ({ type: LOCATION_UPDATE, payload: location })
