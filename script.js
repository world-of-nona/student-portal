document.addEventListener('DOMContentLoaded', () => {
    // 1. التفاعل مع زر عرض الكل للجدول
    const seeAllBtn = document.querySelector('.see-all');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('📑 سيتم فتح صفحة الجدول الأسبوعي الكاملة!');
        });
    }

    // 2. التفاعل مع زر تقديم طلب استئذان
    const bannerBtn = document.querySelector('.banner-btn');
    if (bannerBtn) {
        bannerBtn.addEventListener('click', () => {
            alert('📝 تم فتح نموذج تقديم عذر غياب جديد.');
        });
    }

    // 3. التنقل بين عناصر القائمة الجانبية (Sidebar)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
