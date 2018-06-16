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
