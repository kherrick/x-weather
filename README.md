x-weather
======

## About

  * A collection of [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) implementing portions of the [OpenWeatherMap API](https://openweathermap.org/api).

    <a href="https://kherrick.github.io/x-weather/">
      <img src="https://raw.githubusercontent.com/kherrick/x-weather/master/assets/x-weather-screenshot.png" />
    </a>

## Installation

### Add Internet Explorer 11 compatible polyfills

```html
<div id="ce-es5-shim">
  <script>
    if (!window.customElements) {
      var ceShimContainer = document.querySelector('#ce-es5-shim')

      // This prevents custom-elements-es5-adapter.js from parsing or running.
      ceShimContainer.parentElement.removeChild(ceShimContainer)
    }
  </script>

  <!-- Required, due to a conflict between the polyfills, transpilation, and IE... -->
  <script
    charset="utf-8"
    src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
  ></script>
</div>

<!-- Web component polyfill (only loads what it needs) -->
<script
  charset="utf-8"
  src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js"
></script>
```

### Load and register the web component in the CustomElementRegistry

```html
<script src="https://cdn.jsdelivr.net/npm/x-weather@latest/lib/build-ie11-iife/iife/main.js"></script>
```

## Usage

* After installation and [signing up for an API key](https://home.openweathermap.org/users/sign_up), use the custom element:

```html
<x-weather
  appid="NOT_A_REAL_API_KEY"
  host="api.openweathermap.org"
  location="Phoenix, Arizona"
>
  <style>
    x-current {
      float: left;
      width: 12rem;
    }

    x-forecast {
      --x-forecast-item-float: left;
      --x-forecast-item-width: 12rem;
    }
  </style>
  <x-current scale="F"></x-current>
  <x-forecast days="2" scale="F"></x-forecast>
</x-weather>
```

## Additional information

* Other builds and examples (including basic service workers) can be found inside the [lib folder](https://github.com/kherrick/x-weather/tree/master/lib)
* The package can be installed and imported by npm:
  - `npm i x-weather`
  - `import 'x-weather/lib/build-no-polyfills-esm/esm/main'`
* Building basics:
  - Site
    * `NODE_ENV=production npm run build`
  - Module
    * `NODE_ENV=production npm run bundle-modules`
  - Template
    * `npm run build-templates API-KEY SERVICE-WORKER-URL`
