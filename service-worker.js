/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/x-weather-screenshot.png",
    "revision": "d6e0941964f57011fb21248da51871f9"
  },
  {
    "url": "dist/esm/_rollupPluginBabelHelpers-5bd7183e.js",
    "revision": "8e8d9345205512f051c1ecc72b781876"
  },
  {
    "url": "dist/esm/configureStore.js",
    "revision": "cb6c0a619b0cd9b84b6d70e2ba884851"
  },
  {
    "url": "dist/esm/connect-mixin-144a42a2.js",
    "revision": "48f716df2dffbf70a54d2f4cc4d98fb9"
  },
  {
    "url": "dist/esm/current.js",
    "revision": "571b2b4189a0d31cba3fd64193ba2594"
  },
  {
    "url": "dist/esm/defineCustomElements.js",
    "revision": "4c63b988817badec03e65741b5b653dd"
  },
  {
    "url": "dist/esm/dispatchers.js",
    "revision": "3cdbb3288230a1119a66d28475534651"
  },
  {
    "url": "dist/esm/forecast.js",
    "revision": "4045be1a09813da6508a20e151f4af94"
  },
  {
    "url": "dist/esm/getCurrentWeather.js",
    "revision": "a9386b6313620c3eeafe8a0ad6d497f2"
  },
  {
    "url": "dist/esm/getForecastWeather.js",
    "revision": "99873361288adeb5b1398d90ef9490d1"
  },
  {
    "url": "dist/esm/index.js",
    "revision": "615a485d83279cb9d999ff389f98a340"
  },
  {
    "url": "dist/esm/index2.js",
    "revision": "7a3dca49374798f2251afd7dd530539d"
  },
  {
    "url": "dist/esm/initialState.js",
    "revision": "fd84e63c7088317d23ecc4170074919e"
  },
  {
    "url": "dist/esm/lit-element-ae08ccac.js",
    "revision": "ec1104d24555be47b271a011b83765fb"
  },
  {
    "url": "dist/esm/middleware.js",
    "revision": "38a4f40b4dca48c7a89300a65ba9c47d"
  },
  {
    "url": "dist/esm/module.js",
    "revision": "fb242748513836dc8f66f8fd65d820df"
  },
  {
    "url": "dist/esm/preferences.js",
    "revision": "e3501ab4394542ff6de6e91e1e7ceeef"
  },
  {
    "url": "dist/esm/redux-a2f99696.js",
    "revision": "7c7bae7e123079458186d8787de8f0e2"
  },
  {
    "url": "dist/esm/root.js",
    "revision": "18df936f37bd707d662f5165ea0b852a"
  },
  {
    "url": "dist/esm/types.js",
    "revision": "e5ce7a310726bcd4a5820990650ec610"
  },
  {
    "url": "dist/esm/updateCurrentWeather.js",
    "revision": "4407ca0e8a787ed9cb2d0aadd8203930"
  },
  {
    "url": "dist/esm/updateForecastWeather.js",
    "revision": "717636c2d3c4272ddb4fd81b30dd03cc"
  },
  {
    "url": "dist/esm/utilities.js",
    "revision": "004f93e11a92dcd8d6215e5f0829c908"
  },
  {
    "url": "dist/esm/utilities2.js",
    "revision": "d0fb48cab108aa7daecb6cc2f5b42976"
  },
  {
    "url": "dist/esm/XCurrent.js",
    "revision": "afe064b9179fb2d3f51689a3d276ff13"
  },
  {
    "url": "dist/esm/XCurrentTemperature.js",
    "revision": "61e2443b5b93f57bb8c3eb0e07974737"
  },
  {
    "url": "dist/esm/XDateTime.js",
    "revision": "aed214e9642ff85da0d3126a4cc066a9"
  },
  {
    "url": "dist/esm/XForecast.js",
    "revision": "efc656968406babb780b084131d5691a"
  },
  {
    "url": "dist/esm/XLocation.js",
    "revision": "779a890bfc8c1907997bc43a29d1288e"
  },
  {
    "url": "dist/esm/XWeather.js",
    "revision": "a64b49215824bade360eef13dc50d6b9"
  },
  {
    "url": "dist/esm/XWeatherItem.js",
    "revision": "9b42d578d8c776abd46fd69e6e17c925"
  },
  {
    "url": "dist/esm/XWeatherItemTemperature.js",
    "revision": "8c415cfaf8948b32a7a10b57d78b4ac6"
  },
  {
    "url": "dist/umd/module.js",
    "revision": "9e24848eca228daa511066161844d72b"
  },
  {
    "url": "favicon.ico",
    "revision": "8e95f1cb8b20c3c74e03e8788dcf2130"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "1541be46d0e48ddf14d4eaffdf2f2fa2"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b3c4915043fbf42450a262a702a81dc9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "737dbeeb265bff426a290c3e156b16a7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8b0639445ecc159db7848cec32fc1636"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9843dc733a8bca96ebb41a6e330959e0"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "4b995869ae98ea520a369dad70a19e63"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d4e01d5114f575aac7ab4ecf13794364"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "602f70018994896e1a4573e738ce1225"
  },
  {
    "url": "index.html",
    "revision": "ae6828e7fa86219ade1635831c10647d"
  },
  {
    "url": "service-worker/registerServiceWorker.js",
    "revision": "2430ad6c9c7564564959df43b746fb26"
  },
  {
    "url": "service-worker/workbox-config.js",
    "revision": "45540fea5e8b9242d535d13c53e288cd"
  },
  {
    "url": "/x-weather/",
    "revision": "345995281bc4dc5f338d90aba5639be6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/api.openweathermap.org\/data\/2.5.*$/, new workbox.strategies.NetworkFirst({ "cacheName":"openweathermap-api-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/openweathermap.org\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"openweathermap-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-jsdeliver-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/rawgit.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"rawgit-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/unpkg.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"unpkg-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
