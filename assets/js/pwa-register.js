// تسجيل الـ Service Worker لتفعيل ميزات الـ PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('تم تسجيل Service Worker بنجاح:', registration.scope);
            })
            .catch((error) => {
                console.log('فشل تسجيل Service Worker:', error);
            });
    });
}