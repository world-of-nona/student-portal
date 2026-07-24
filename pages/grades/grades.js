// برمجة إدارة العلامات وحساب المعدل 📊
document.addEventListener("DOMContentLoaded", () => {
    const gradeForm = document.getElementById("grade-form");
    const gradeList = document.getElementById("grade-list");
    const gpaValue = document.getElementById("gpa-value");

    // دالة حساب المعدل وعرض العلامات
    function calculateAndRenderGrades() {
        const grades = JSON.parse(localStorage.getItem("userGrades")) || [];
        if (!gradeList) return;

        gradeList.innerHTML = "";

        if (grades.length === 0) {
            gradeList.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #888;">لا توجد علامات مسجلة بعد 📝</td></tr>`;
            if (gpaValue) gpaValue.textContent = "-- / 20";
            return;
        }

        let totalPoints = 0;
        let totalCoeff = 0;

        grades.forEach((item, index) => {
            const gradeNum = parseFloat(item.score);
            const coeffNum = parseFloat(item.coeff);

            totalPoints += gradeNum * coeffNum;
            totalCoeff += coeffNum;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${item.subject}</strong></td>
                <td>${item.score} / 20</td>
                <td>${item.coeff}</td>
                <td>
                    <button onclick="deleteGrade(${index})" style="background: none; border: none; color: #E74C3C; cursor: pointer; font-size: 14px;">حذف 🗑️</button>
                </td>
            `;
            gradeList.appendChild(tr);
        });

        // حساب المعدل الموزون
        if (gpaValue && totalCoeff > 0) {
            const average = (totalPoints / totalCoeff).toFixed(2);
            gpaValue.textContent = `${average} / 20`;
        }
    }

    // إضافة علامة جديدة
    if (gradeForm) {
        gradeForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const subject = document.getElementById("subject").value.trim();
            const score = document.getElementById("score").value;
            const coeff = document.getElementById("coeff").value;

            if (subject && score && coeff) {
                const newGrade = { subject, score, coeff };
                const grades = JSON.parse(localStorage.getItem("userGrades")) || [];
                grades.push(newGrade);

                localStorage.setItem("userGrades", JSON.stringify(grades));
                gradeForm.reset();
                calculateAndRenderGrades();
            }
        });
    }

    // دالة حذف العلامة
    window.deleteGrade = function(index) {
        const grades = JSON.parse(localStorage.getItem("userGrades")) || [];
        grades.splice(index, 1);
        localStorage.setItem("userGrades", JSON.stringify(grades));
        calculateAndRenderGrades();
    };

    calculateAndRenderGrades();
});