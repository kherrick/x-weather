module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{js,png,ico,html}"
  ],
  "swDest": "service-worker.js",
  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 100,
        },
      },
    },
    {
      urlPattern: new RegExp('^https://api.openweathermap.org/data/2.5.*$'),
      handler: 'NetworkFirst',
      options: {
        cacheName: 'openweathermap-api-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://openweathermap.org/img/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'openweathermap-img-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
  ],

};