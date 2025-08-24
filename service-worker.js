// Define el nombre de la caché y los archivos a cachear.
const CACHE_NAME = 'mi-rutina-cache-v2'; // Versión actualizada para forzar la actualización
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap',
    'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2'
];

// Evento 'install': se dispara cuando el Service Worker se instala.
// Aquí abrimos la caché y agregamos los archivos principales.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caché abierta y archivos añadidos');
                return cache.addAll(urlsToCache);
            })
    );
});

// Evento 'activate': se dispara cuando el Service Worker se activa.
// Aquí se limpian cachés antiguas para asegurar que usamos la nueva.
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Evento 'fetch': se dispara cada vez que la aplicación solicita un recurso.
// Interceptamos la petición y respondemos con el archivo desde la caché si está disponible.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si encontramos una respuesta en la caché, la devolvemos.
                if (response) {
                    return response;
                }
                
                // Si no, hacemos la petición a la red.
                return fetch(event.request);
            })
    );
});
