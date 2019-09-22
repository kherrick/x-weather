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
