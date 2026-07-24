// برمجة صفحة الإعدادات ⚙️
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const resetDataBtn = document.getElementById("reset-data-btn");

    // تحديث نص الزر حسب الحالة الحالية
    function updateThemeButtonText() {
        if (!themeToggleBtn) return;
        const currentTheme = document.documentElement.getAttribute("data-theme");
        themeToggleBtn.textContent = currentTheme === "dark" ? "التحويل للوضع الفاتح ☀️" : "التحويل للوضع الداكن 🌙";
    }

    if (themeToggleBtn) {
        updateThemeButtonText();
        themeToggleBtn.addEventListener("click", () => {
            toggleTheme(); // دالة معرفة بـ global.js
            updateThemeButtonText();
        });
    }

    // مسح وإعادة ضبط البيانات
    if (resetDataBtn) {
        resetDataBtn.addEventListener("click", () => {
            if (confirm("هل أنتِ متأكدة من رغبتكِ في مسح جميع البيانات المخزنة؟ ⚠️")) {
                localStorage.clear();
                alert("تم مسح جميع البيانات بنجاح! 🧹");
                window.location.reload();
            }
        });
    }
});