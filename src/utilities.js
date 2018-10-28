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

export const setTextContent = (shadowRoot, id, value) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
  // Sometimes people use innerHTML to retrieve or write text inside an element.
  // textContent has better performance because its value is not parsed as HTML.
  // Moreover, using textContent can prevent XSS attacks.
  shadowRoot.querySelector(`#${id}`).textContent = value
}

export const unixEpochToDate = timestamp => new Date(timestamp * 1000)

export const dateTime = date => {
  'use strict'

    return {
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
    }
}
