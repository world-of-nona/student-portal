// برمجة صفحة تسجيل الدخول 🔑
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");

            const username = usernameInput ? usernameInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";

            if (username && password) {
                // حفظ بيانات المستخدِم بداخل LocalStorage 💾
                const userData = {
                    username: username,
                    isLoggedIn: true,
                    loginTime: new Date().toLocaleString()
                };

                localStorage.setItem("currentUser", JSON.stringify(userData));

                // التوجيه المباشر إلى لوحة التحكم 📊
                window.location.href = "../dashboard/dashboard.html";
            } else {
                alert("يرجى إدخال اسم المستخدم وكلمة المرور ⚠️");
            }
        });
    }
});