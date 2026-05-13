const cacheName = 'inventario-v1';
const assets = [
  './',
  './index.html',
  './mani.json'
];

// Instalar el Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activar y responder peticiones
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
