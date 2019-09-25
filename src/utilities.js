export const convertTemperature = (t, calcString = 'cToF') => {
  const cToK = t => t + 273.15
  const kToC = t => t - 273.15
  const cToF = t => (9 / 5) * t + 32
  const fToC = t => ((t - 32) * 5) / 9

  return {
    cToK,
    kToC,
    cToF,
    fToC,
    kToF: t => cToF(kToC(t)),
    fToK: t => cToK(fToC(t))
  }[calcString](t)
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('x-weather-state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('x-weather-state', serializedState)
  } catch (err) {
    // Ignore write errors...
  }
}
