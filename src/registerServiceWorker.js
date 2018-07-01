if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js', { scope: '/' })
    .then(({ scope }) => console.log(`Registration succeeded. Scope is ${scope}`))
    .catch(error => console.error(`Registration failed with ${error}`))
}