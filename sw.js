const CACHE_NAME = "nona-pwa-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./assets/css/global.css",
  "./assets/css/components.css",
  "./assets/js/global.js",
  "./components/navbar.html",
  "./pages/offline/offline.html"
];

// تثبيت ملف الخدمة وتحفيظ الكاش 📦
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// تفعيل وتحديث الكاش 🔄
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// استقبال الطلبات وعرض الصفحات أوفلاين 🌐
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request).then((response) => {
        return response || caches.match("./pages/offline/offline.html");
      });
    })
  );
});