// برمجة لوحة التحكم Dashboard 📊
document.addEventListener("DOMContentLoaded", () => {
    // جلب بيانات المستخدم من LocalStorage 💾
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    const welcomeTitle = document.getElementById("welcome-user");

    if (userData && userData.username) {
        if (welcomeTitle) {
            welcomeTitle.textContent = `أهلاً بكِ مجدداً، ${userData.username} 👋`;
        }
    } else {
        // إذا لم يكن قد سجل الدخول، توجيهه لصفحة الدخول 🔑
        if (welcomeTitle) {
            welcomeTitle.textContent = "أهلاً بكِ في لوحة التحكم 👋";
        }
    }
});