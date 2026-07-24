// برمجة إدارة مبررات الغياب 📝
document.addEventListener("DOMContentLoaded", () => {
    const excuseForm = document.getElementById("excuse-form");
    const excuseList = document.getElementById("excuse-list");

    // دالة لعرض المبررات المحفوظة
    function loadExcuses() {
        const excuses = JSON.parse(localStorage.getItem("userExcuses")) || [];
        if (!excuseList) return;

        excuseList.innerHTML = "";

        if (excuses.length === 0) {
            excuseList.innerHTML = `<p style="text-align: center; color: #888;">لا توجد مبررات مقدمة حتى الآن 📭</p>`;
            return;
        }

        excuses.forEach((excuse, index) => {
            const card = document.createElement("div");
            card.className = "card";
            card.style.padding = "15px";
            card.style.marginBottom = "10px";
            card.style.borderRadius = "8px";

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong>📌 المادة: ${excuse.subject}</strong>
                    <span style="font-size: 12px; color: #888;">📅 ${excuse.date}</span>
                </div>
                <p style="margin: 8px 0; color: var(--secondary-color);">${excuse.reason}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <span style="font-size: 13px; font-weight: bold; color: #E67E22;">الحالة: قيد المراجعة ⏳</span>
                    <button onclick="deleteExcuse(${index})" style="background: none; border: none; color: #E74C3C; cursor: pointer; font-size: 13px;">حذف 🗑️</button>
                </div>
            `;
            excuseList.appendChild(card);
        });
    }

    // إضافة مبرر جديد
    if (excuseForm) {
        excuseForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const subject = document.getElementById("subject").value.trim();
            const date = document.getElementById("excuse-date").value;
            const reason = document.getElementById("reason").value.trim();

            if (subject && date && reason) {
                const newExcuse = { subject, date, reason, status: "pending" };
                const excuses = JSON.parse(localStorage.getItem("userExcuses")) || [];
                excuses.push(newExcuse);

                localStorage.setItem("userExcuses", JSON.stringify(excuses));
                excuseForm.reset();
                loadExcuses();
            }
        });
    }

    // دالة الحذف
    window.deleteExcuse = function(index) {
        const excuses = JSON.parse(localStorage.getItem("userExcuses")) || [];
        excuses.splice(index, 1);
        localStorage.setItem("userExcuses", JSON.stringify(excuses));
        loadExcuses();
    };

    // تحميل القائمة فور فتح الصفحة
    loadExcuses();
});