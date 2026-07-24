// تحميل القائمة العلوية Navbar ديناميكياً في كل الصفحات 🧭
document.addEventListener("DOMContentLoaded", () => {
    const navbarHeader = document.getElementById("main-navbar");
    if (navbarHeader) {
        fetch("../../components/navbar.html")
            .then(response => {
                if (!response.ok) throw new Error("تعذر تحميل القائمة العلوية");
                return response.text();
            })
            .then(data => {
                navbarHeader.innerHTML = data;
            })
            .catch(error => console.error("خطأ في تحميل القائمة:", error));
    }
});