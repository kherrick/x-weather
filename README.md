# \<x-weather>

## About

A collection of [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) implementing portions of the [OpenWeatherMap API](https://openweathermap.org/api).

<a href="https://kherrick.github.io/x-weather-app/">
  <img src="https://raw.githubusercontent.com/kherrick/x-weather/master/assets/x-weather-screenshot.png" width="75%" />
</a>

## Usage

### Static Import Example:

Install:
```bash
npm i x-weather
```

Render:

```html
<script type="module">
  import * as XWeather from './node_modules/x-weather/dist/esm/module.js'

  XWeather.defineCustomElements()
</script>
<x-weather
  appid="NOT_A_REAL_APP_ID"
  latitude="33.43"
  longitude="-112.11"
  placename="Phoenix, Arizona"
>
  <x-current primaryscale="f"></x-current>
  <x-forecast days="14" primaryscale="f"></x-forecast>
</x-weather>
```

### Dynamic Import Example:

Render:
```html
<script>
  import('https://unpkg.com/x-weather/dist/esm/defineCustomElements.js')
    .then(({
      defineCustomElements
    }) => {
      defineCustomElements()
    })
</script>
<x-weather
  appid="NOT_A_REAL_APP_ID"
  latitude="33.43"
  longitude="-112.11"
  placename="Phoenix, Arizona"
>
  <x-current primaryscale="f"></x-current>
  <x-forecast days="14" primaryscale="f"></x-forecast>
</x-weather>
```

## Development
```bash
npm run start
```

## Lint
```bash
npm run lint
```

## Build
```bash
npm run build
```
