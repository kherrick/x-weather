web-components-starter
======

## Diving into web components

[![web-components-starter-screenshot](https://raw.githubusercontent.com/kherrick/web-components-starter/master/assets/web-components-starter-screenshot.png)](https://kherrick.github.io/web-components-starter/)

---

## System requirements:

  * [Node.js](https://nodejs.org/)

## Develop using the npm module:

### Create a new project directory

```bash
mkdir -p hello-web-components \
 && cd hello-web-components \
 && npm init -y
```

### Install the npm module

```bash
 npm i web-components-starter
 ```

### Copy the starter index.html to the root of the project

 ```bash
 cp node_modules/web-components-starter/dist/build-ie11-iife/index.html ./
 ```

### Update the path to the module
 ```bash
export C=container I=index N=iife WCS=web-components-starter \
  && sed "s#./$N/main.js#./node_modules/$WCS/dist/build-ie11-$N/$N/main.js#g" ./$I.html > $I.html.new \
  && mv index.html.new index.html
```

### Serve the project
```bash
npx serve -s .
```

## Develop using the git repository:

### Open a terminal, clone [this repository](https://github.com/kherrick/web-components-starter/), and run one of the following in the root of the project:

  * `npm run start` - by default builds [a view targeting IE11+](https://kherrick.github.io/web-components-starter/) (from IE11, to Edge, Chrome, Firefox, and Safari)

  * `npm run start-custom-elements-shady-dom-esm` - targeting browsers after IE11 (a Custom Elements v1 and [shady DOM polyfill](https://www.polymer-project.org/blog/shadydom) only)

  * `npm run start-no-polyfills-iife` - targets evergreen browsers supporting [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements) and shadow DOM (builds a minimal view in a "vanilla js" style)

## Try out server side rendering:

### Minimal support for server side rendering components can be found by checking out the following npm lifecycle scripts:

* `npm run start-development-ssr-server` - uses babel-node for fast development
* `npm run build-ie11-iife-ssr` - compiles components and sets up express for rendering them
