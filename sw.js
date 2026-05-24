const CACHE_NAME = 'sdc-erp-mobile-space-image-fix-v89';
const APP_SHELL = [
  './',
  './index.html',
  './productos.html',
  './catalogo.html',
  './venta.html',
  './cotizaciones.html',
  './ventas.html',
  './finanzas.html',
  './assets/css/styles.css',
  './assets/css/pages.css',
  './assets/js/app.js',
  './assets/js/pages-router.js',
  './assets/js/pages/finanzas.js',
  './assets/js/pages/ventas.js',
  './assets/js/pages/cotizaciones.js',
  './assets/js/pages/venta.js',
  './assets/js/pages/productos.js',
  './assets/js/pages/inicio.js',
  './assets/js/firebase.js',
  './manifest.json',
  './assets/images/logo-sdcomayagua.png',
  './assets/images/logo-sdcomayagua-small.png',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './assets/images/favicon-32.png',
  './assets/images/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL).catch(() => null))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const request = event.request;
  event.respondWith(
    fetch(request, { cache: 'no-store' })
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => null);
        }
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
  );
});
