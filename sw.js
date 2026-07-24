const CACHE_NAME = 'nona-portal-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/assets/css/global.css',
    '/assets/css/components.css',
    '/assets/css/responsive.css',
    '/assets/js/global.js',
    '/manifest.json'
];

// تثبيت الـ Service Worker وحفظ الملفات في التخزين المؤقت
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// استرجاع الملفات المخزنة عند عدم وجود إنترنت
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});