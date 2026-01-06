self.addEventListener('fetch', function(event) {
  // On laisse passer toutes les requêtes normalement vers internet
  event.respondWith(fetch(event.request));
});
