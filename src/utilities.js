export const convertTemperature = (t, calcString = 'cToF') => {
  const cToK = t => t + 273.15
  const kToC = t => t - 273.15
  const cToF = t => (9 / 5 * t) + 32
  const fToC = t => (t - 32) * 5 / 9

  return {
    cToK,
    kToC,
    cToF,
    fToC,
    kToF: t => cToF(kToC(t)),
    fToK: t => cToK(fToC(t))
  }[calcString](t)
}

/**
 * attempting to be RFC4122 version 4 compliant adapted from:
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export const generateUUID = () => {
  let d = new Date().getTime()

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now()
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0

    d = Math.floor(d / 16)

    return (c === 'x'
      ? r
      : (r & 0x3 | 0x8)).toString(16)
  })
}

// custom getElementById intended for use with undom
export const getElementById = (id, root) => {
  // a linkedList would be more performant in time and space complexity
  let queue = []

  queue.push(root)

  let currentNode

  while (queue.length) {
    currentNode = queue.shift()

    if (currentNode.id === id) {
      return currentNode
    }

    queue.push(...currentNode.children)
  }

  return false
}

export const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object

export const loadComponent = ({ customElements, tagName, element }) => {
  const load = ({ customElements, tagName, element }) => {
    customElements.define(tagName, element)
  }

  // Conditional loading of polyfill
  if (window.customElements) {
    load({ customElements, tagName, element })
  } else {
    document.addEventListener('WebComponentsReady', () => {
      load({ customElements, tagName, element })
    })
  }
}

export const unixEpochToDate = timestamp => new Date(timestamp * 1000)

export const dateTime = date => ({
  date: date,
  results: '',
  getResults: function () {
    return this.results
  },
  getTimeStamp: function () {
    return this.date.getTime()
  },
  Y: function(sep) {
    this.results += this.date.getFullYear()

    if (this.sep(sep)) {
      this.results += sep
    }

    return this
  },
  m: function(sep) {
    this.results += this.pad(this.date.getMonth() + 1)

    if (this.sep(sep)) {
      this.results += sep
    }

    return this
  },
  d: function(sep) {
    this.results += this.pad(this.date.getDate())

    if (this.sep(sep)) {
      this.results += sep
    }

    return this
  },
  H: function (sep) {
    this.results += this.pad(this.date.getHours())

    if (this.sep(sep)) {
      this.results += sep
    }

    return this
  },
  M: function (sep) {
    this.results += this.pad(this.date.getMinutes())

    if (this.sep(sep)) {
      this.results += sep
    }

    return this
  },
  S: function(sep) {
    this.results += this.pad(this.date.getSeconds())

    if (this.sep(sep)) {
      this.results += sep
    }

    return this
  },
  pad: function(val) {
    return (val < 10) ? ('0' + val) : val
  },
  sep: function(sep) {
    return sep ? true: false
  }
})

// input "00:00:00" through "23:59:59"
export const to12HourTime = timeStamp => {
  const splitTimeStamp = String(timeStamp).split(':')

  let hours = Number(splitTimeStamp[0])
  let minutes = Number(splitTimeStamp[1]) || 0
  let seconds = Number(splitTimeStamp[2]) || 0

  if (hours < 0
    || hours > 23
    || minutes < 0
    || minutes > 59
    || seconds < 0
    || seconds > 59
  ) {
    hours = minutes = seconds = 0
  }

  let timeString = '12'

  if (hours > 0 && hours <= 12) {
    timeString = String(hours)
  }

  if (hours > 12) {
    timeString = String(hours % timeString)
  }

  timeString += minutes < 10
    ? ':0' + minutes
    : ':' + minutes

  timeString += seconds < 10
    ? ':0' + seconds
    : ':' + seconds

  timeString += hours >= 12
    ? ' p.m.'
    : ' a.m.'

  return timeString
}
