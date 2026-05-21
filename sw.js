self.addEventListener('install', (e) => {
    console.log('[SDC Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
