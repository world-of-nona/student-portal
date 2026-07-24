// برمجة صفحة الإعدادات ⚙️
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("toggle-theme-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // تحديث نص زر النمط حسب النمط الحالي
    function updateThemeBtnText() {
        if (!themeBtn) return;
        const currentTheme = document.documentElement.getAttribute("data-theme");
        themeBtn.textContent = currentTheme === "dark" ? "التحويل للنمط الفاتح ☀️" : "التحويل للنمط الداكن 🌙";
    }

    // زر تغيير النمط
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            toggleTheme(); // الدالة المعرفة بملف global.js
            updateThemeBtnText();
        });
        updateThemeBtnText();
    }

    // زر تسجيل الخروج
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            window.location.href = "../auth/login.html";
        });
    }
});