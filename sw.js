const CACHE_NAME = 'sdc-erp-version-toda-pagina-v75';
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
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
