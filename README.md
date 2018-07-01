x-weather
======

## System requirements:

  * [Node.js](https://nodejs.org/)

## Usage:

* Clone [this repository](https://github.com/kherrick/x-weather/)

* To configure the element, set the following attributes:

  * appid
  * location

* Run one of the following in the root of the project:

  * `npm run start` - by default builds [a view targeting IE11+](https://kherrick.github.io/x-weather/) (from IE11, to Edge, Chrome, Firefox, and Safari)

  * `npm run start-custom-elements-shady-dom-esm` - targeting browsers after IE11 (a Custom Elements v1 and [shady DOM polyfill](https://www.polymer-project.org/blog/shadydom) only)

  * `npm run start-no-polyfills-iife` - targets evergreen browsers supporting [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements) and shadow DOM (builds a minimal view in a "vanilla js" style)
