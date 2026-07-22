document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');

    // 1. الانتقال عند الضغط على تسجيل الدخول
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            // إخفاء شاشة الدخول وإظهار لوحة التحكم
            loginScreen.classList.remove('active-screen');
            dashboardScreen.classList.add('active-screen');

            // التمرير لأعلى الشاشة
            window.scrollTo(0, 0);
        });
    }

    // 2. التنقل بين أزرار الشريط السفلي (Bottom Nav)
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
