document.addEventListener('DOMContentLoaded', () => {

    // 1. 🌙 إدارة الوضع الليلي (Dark Mode) والحفاظ على الاختيار عبر الصفحات
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const isDarkMode = localStorage.getItem('theme') === 'dark';

    // تطبيق الثيم الداكن تلقائياً إذا تم تفعيله سابقاً
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        if (darkModeToggle) darkModeToggle.checked = true;
    }

    // عند تغيير حالة مفتاح الوضع الليلي في صفحة الإعدادات
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark'); // حفظ الاختيار
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light'); // حفظ الاختيار
            }
        });
    }

    // 2. 🌐 إدارة تغيير لغة التطبيق
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const selectedLangText = e.target.options[e.target.selectedIndex].text;
            alert(`🌐 سيتم تغيير لغة التطبيق إلى: ${selectedLangText}`);
        });
    }

    // 3. 📝 التفاعل مع زر تقديم طلب عذر غياب
    const noticeBtn = document.querySelector('.notice-btn');
    if (noticeBtn) {
        noticeBtn.addEventListener('click', () => {
            alert('📝 تم فتح نموذج تقديم عذر غياب جديد.');
        });
    }

    // 4. 🔔 التفاعل مع زر الإشعارات
    const notificationBtn = document.querySelector('.icon-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            alert('🔔 لديك 3 إشعارات جديدة بخصوص المحاضرات.');
        });
    }

    // 5. 📍 التفاعل مع زر عرض القاعة / الخريطة
    const chipBtn = document.querySelector('.chip-btn');
    if (chipBtn) {
        chipBtn.addEventListener('click', () => {
            alert('📍 القاعة 204 تقع في الدور الثاني - المبنى B.');
        });
    }

});
