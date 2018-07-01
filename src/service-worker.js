self.addEventListener(
  'install',
  event => {
    self.skipWaiting()
    event.waitUntil(caches.open('weather')
      .then(cache =>cache.addAll(['/']))
    )
  }
)

self.addEventListener(
  'fetch',
  event => event.respondWith(caches.match(event.request)
    .then(resp => resp || fetch(event.request)
      .then(response => caches.open('weather')
        .then(cache => {
          cache.put(event.request, response.clone())

          return response
        })
      )
    )
  )
)
