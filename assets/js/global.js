// تحميل القائمة العلوية Navbar بشكل ذكي يتكيف مع مكان الصفحة 🧭
document.addEventListener("DOMContentLoaded", () => {
    const navbarHeader = document.getElementById("main-navbar");
    if (navbarHeader) {
        // فحص ما إذا كانت الصفحة داخل مجلد فرعي أم في المجلد الرئيسي
        const isSubPage = window.location.pathname.includes("/pages/");
        const fetchPath = isSubPage ? "../../components/navbar.html" : "./components/navbar.html";

        fetch(fetchPath)
            .then(response => {
                if (!response.ok) throw new Error("تعذر تحميل القائمة العلوية");
                return response.text();
            })
            .then(data => {
                let htmlContent = data;
                // ضبط الروابط تلقائياً إذا كنا في الصفحة الرئيسية
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