web-components-starter
======

A Web Components starter project

[![web-components-starter-screenshot](./assets/web-components-starter-screenshot.png)](https://kherrick.github.io/web-components-starter/)

---

## Get started:

### System requirements:

  * [Node.js](https://nodejs.org/)

### Open a terminal, clone this repository, and run the following in the root of the project:

  * `npm run start` - by default builds [a view targeting IE11+](https://kherrick.github.io/web-components-starter/) (from IE11, to Edge, Chrome, Firefox, and Safari)

  * `npm run start-custom-elements-shady-dom` - targeting browsers after IE11 (a Custom Elements v1 and [shady DOM polyfill](https://www.polymer-project.org/blog/shadydom) only)

  * `npm run start-no-polyfills` - targets evergreen browsers supporting [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements) and shadow DOM (builds a minimal view in a "vanilla js" style)
