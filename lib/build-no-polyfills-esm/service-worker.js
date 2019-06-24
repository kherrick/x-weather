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
    "url": "esm/main.js",
    "revision": "e3d385660a4ae57ecfae67eb8e0b9678"
  },
  {
    "url": "esm/registerServiceWorker.js",
    "revision": "9842b9d6be06080908fd80ed37ae3bf4"
  },
  {
    "url": "esm/utilities-d21591dc.js",
    "revision": "cc932eb3f62808bbba02db92ec1f0f06"
  },
  {
    "url": "esm/utilities.js",
    "revision": "d40ce527aeaa265418ec2eb124064af6"
  },
  {
    "url": "esm/workbox-config.js",
    "revision": "ed4d5e6797b55e60c1eb8d3efb074f87"
  },
  {
    "url": "esm/x-current.js",
    "revision": "9c7b978211c8b622f27a855854bfe2e8"
  },
  {
    "url": "esm/x-forecast-item.js",
    "revision": "f5690ae477682871608143e8654d4476"
  },
  {
    "url": "esm/x-forecast.js",
    "revision": "6d83f11fd4f92cd0d15838bc01ac7cf0"
  },
  {
    "url": "esm/x-weather-bottom.js",
    "revision": "6260f2e481e080b24e83c8c0f17ecd54"
  },
  {
    "url": "esm/x-weather-middle.js",
    "revision": "faee729ab18580a0a058169695156339"
  },
  {
    "url": "esm/x-weather-top.js",
    "revision": "1d8b6ae28b6b5cff29c29b3697000a88"
  },
  {
    "url": "esm/x-weather.js",
    "revision": "898ef4ce8dfec6ab96252c4455462c43"
  },
  {
    "url": "favicon.ico",
    "revision": "8e95f1cb8b20c3c74e03e8788dcf2130"
  },
  {
    "url": "index.html",
    "revision": "0cf1f247cf0936d6cb6c9d7b8146d100"
  },
  {
    "url": "registerServiceWorker.js",
    "revision": "978ca08cac55cee9992016f4e8c266fc"
  },
  {
    "url": "workbox-config.js",
    "revision": "f1fa12bfce8b985337133a4ed7ec6c10"
  },
  {
    "url": "/x-weather/",
    "revision": "799f3b1e64a0ec48abde2678953717de"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/api.openweathermap.org\/data\/2.5.*$/, new workbox.strategies.NetworkFirst({ "cacheName":"openweathermap-api-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/openweathermap.org\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"openweathermap-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-jsdeliver-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/rawgit.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"rawgit-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/unpkg.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"unpkg-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
