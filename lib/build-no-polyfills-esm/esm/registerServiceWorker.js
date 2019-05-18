if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then(function (_ref) {
    var scope = _ref.scope;
    return console.log('Registration succeeded. Scope is ' + scope);
  }).catch(function (error) {
    return console.error('Registration failed with ' + error);
  });
}
//# sourceMappingURL=registerServiceWorker.js.map
