self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(caches.open('weather').then(function (cache) {
    return cache.addAll(['/']);
  }));
});

self.addEventListener('fetch', function (event) {
  return event.respondWith(caches.match(event.request).then(function (resp) {
    return resp || fetch(event.request).then(function (response) {
      return caches.open('weather').then(function (cache) {
        cache.put(event.request, response.clone());

        return response;
      });
    });
  }));
});
//# sourceMappingURL=service-worker.js.map
