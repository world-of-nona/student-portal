// برمجة إدارة الجدول الدراسي 🗓️
document.addEventListener("DOMContentLoaded", () => {
    const scheduleForm = document.getElementById("schedule-form");
    const scheduleContainer = document.getElementById("schedule-container");

    // أيام الأسبوع بالترتيب
    const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];

    // دالة عرض الجدول الدراسي
    function renderSchedule() {
        const scheduleData = JSON.parse(localStorage.getItem("userSchedule")) || [];
        if (!scheduleContainer) return;

        scheduleContainer.innerHTML = "";

        days.forEach(day => {
            const dayCard = document.createElement("div");
            dayCard.className = "card day-card";
            dayCard.style.padding = "15px";
            dayCard.style.marginBottom = "20px";
            dayCard.style.borderRadius = "12px";

            const daySessions = scheduleData.filter(item => item.day === day);

            let sessionsHTML = "";
            if (daySessions.length === 0) {
                sessionsHTML = `<p style="color: #888; font-size: 13px; text-align: center; margin: 10px 0;">لا توجد محاضرات مسجلة ☕</p>`;
            } else {
                sessionsHTML = daySessions.map((session) => {
                    const originalIndex = scheduleData.indexOf(session);
                    return `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed var(--border-color, #eee);">
                            <div>
                                <strong>📖 ${session.subject}</strong>
                                <div style="font-size: 12px; color: var(--secondary-color, #666); margin-top: 3px;">
                                    ⏰ ${session.time} | 🏫 ${session.room || 'غير محدد'}
                                </div>
                            </div>
                            <button onclick="deleteSession(${originalIndex})" style="background: none; border: none; color: #E74C3C; cursor: pointer; font-size: 13px;">حذف 🗑️</button>
                        </div>
                    `;
                }).join("");
            }

            dayCard.innerHTML = `
                <h3 style="margin-top: 0; color: var(--primary-color, #4A90E2); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">📌 يوم ${day}</h3>
                ${sessionsHTML}
            `;

            scheduleContainer.appendChild(dayCard);
        });
    }

    // إضافة حصة جديدة
    if (scheduleForm) {
        scheduleForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const day = document.getElementById("day-select").value;
            const subject = document.getElementById("subject").value.trim();
            const time = document.getElementById("time").value.trim();
            const room = document.getElementById("room").value.trim();

            if (day && subject && time) {
                const newSession = { day, subject, time, room };
                const scheduleData = JSON.parse(localStorage.getItem("userSchedule")) || [];
                scheduleData.push(newSession);

                localStorage.setItem("userSchedule", JSON.stringify(scheduleData));
                scheduleForm.reset();
                renderSchedule();
            }
        });
    }

    // دالة الحذف
    window.deleteSession = function(index) {
        const scheduleData = JSON.parse(localStorage.getItem("userSchedule")) || [];
        scheduleData.splice(index, 1);
        localStorage.setItem("userSchedule", JSON.stringify(scheduleData));
        renderSchedule();
    };

    renderSchedule();
});