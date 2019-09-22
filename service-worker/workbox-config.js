const WORKBOX_CONFIG_PATH = process.env.WORKBOX_CONFIG_PATH || '/'

module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{js,png,ico,html}'],
  globIgnores: ['**/node_modules/**/*', '**/service-worker.js', 'dev/**', 'src/**', 'rollup.config.js'],
  templatedURLs: {
    [`${WORKBOX_CONFIG_PATH}`]: `${new Date()}`
  },
  swDest: 'service-worker.js',
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
          maxEntries: 100
        }
      }
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
      urlPattern: new RegExp('^https://openweathermap.org/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'openweathermap-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://cdn.jsdelivr.net/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'cdn-jsdeliver-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://rawgit.com/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'rawgit-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://unpkg.com/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'unpkg-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    }
  ]
}
