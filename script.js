document.addEventListener('DOMContentLoaded', () => {
    
    // 1. إدارة التنقل بين أزرار الشريط السفلي (Bottom Nav)
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // إزالة التفعيل عن باقي الأزرار
            navButtons.forEach(btn => btn.classList.remove('active'));
            // تفعيل الزر المبتكر المختار
            button.classList.add('active');
        });
    });

    // 2. التفاعل مع زر تقديم طلب عذر غياب 📝
    const noticeBtn = document.querySelector('.notice-btn');
    if (noticeBtn) {
        noticeBtn.addEventListener('click', () => {
            alert('📝 تم فتح نموذج تقديم عذر غياب جديد.');
        });
    }

    // 3. التفاعل مع زر الإشعارات 🔔
    const notificationBtn = document.querySelector('.icon-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            alert('🔔 لديك 3 إشعارات جديدة بخصوص المحاضرات.');
        });
    }

    // 4. التفاعل مع زر عرض الخريطة 📍
    const chipBtn = document.querySelector('.chip-btn');
    if (chipBtn) {
        chipBtn.addEventListener('click', () => {
            alert('📍 القاعة 204 تقع في الدور الثاني - المبنى B.');
        });
    }

});
