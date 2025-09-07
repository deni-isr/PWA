const cacheName = 'hello-pwa-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
