x-weather
======

## About

  * A web component implementing portions of the [OpenWeatherMap API](https://openweathermap.org/api).

    <img src="https://raw.githubusercontent.com/kherrick/x-weather/master/assets/x-weather-screenshot.png" />

## Installation

* Method 1:

  - Install the npm package
    * `npm i x-weather`
  - Import the package into a project
    * `import 'x-weather/lib/build-ie11-iife/iife/main'`

* Method 2:
  - Add the component via jsDelivr:
    * `<script src="https://cdn.jsdelivr.net/npm/x-weather@0.0.5/lib/build-ie11-iife/iife/main.js"></script>`


## Add polyfills

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

## Usage

* [Sign up for an API key](https://home.openweathermap.org/users/sign_up) and use the custom element

```html
  <x-weather
    appid="NOT_A_REAL_API_KEY"
    host="api.openweathermap.org"
    location="Detroit, Michigan"
  >
    <x-current></x-current>
    <x-forecast></x-forecast>
  </x-weather>
```

