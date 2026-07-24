// 1. إعداد وحفظ النمط الداكن (Dark Mode) في ذاكرة المتصفح 🌙
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// دالة التبديل بين النمطين
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

// تطبيق النمط فوراً قبل تفعيل الصفحة
applySavedTheme();

// 2. تحميل القائمة العلوية Navbar بشكل ذكي 🧭
document.addEventListener("DOMContentLoaded", () => {
    const navbarHeader = document.getElementById("main-navbar");
    if (navbarHeader) {
        const isSubPage = window.location.pathname.includes("/pages/");
        const fetchPath = isSubPage ? "../../components/navbar.html" : "./components/navbar.html";

        fetch(fetchPath)
            .then(response => {
                if (!response.ok) throw new Error("تعذر تحميل القائمة العلوية");
                return response.text();
            })
            .then(data => {
                let htmlContent = data;
                if (!isSubPage) {
                    htmlContent = htmlContent
                        .replaceAll('href="../', 'href="./pages/')
                        .replaceAll('href="../../index.html"', 'href="./index.html"');
                }
                navbarHeader.innerHTML = htmlContent;
            })
            .catch(error => console.error("خطأ في تحميل القائمة:", error));
    }
});