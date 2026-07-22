let currentLang = 'en';

function updateDateTime() {
    const now = new Date();
    let locale = 'en-US';
    if (currentLang === 'fr') locale = 'fr-FR';
    if (currentLang === 'ar') locale = 'ar-DZ';

    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    document.getElementById('live-date').innerText = now.toLocaleDateString(locale, dateOptions);
    document.getElementById('live-time').innerText = now.toLocaleTimeString(locale, timeOptions);
}
setInterval(updateDateTime, 1000);
updateDateTime();

function toggleFlagsMenu() {
    const popup = document.getElementById('flags-popup');
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
}

function toggleGenderTheme() {
    const body = document.body;
    const btn = document.getElementById('gender-icon-btn');
    if (body.getAttribute('data-theme') === 'girl') {
        body.setAttribute('data-theme', 'boy');
        btn.innerText = '♂️';
    } else {
        body.setAttribute('data-theme', 'girl');
        btn.innerText = '♀️';
    }
}

const translations = {
    en: {
        title: "🌸 Student Portal",
        subtitle: "Please enter your student ID to login",
        placeholder: "Enter Student ID",
        remember: "Remember me for:",
        opt1: "1 Day 📅", opt2: "2 Days 📅", opt7: "1 Week 🗓️", opt365: "Always ♾️",
        loginBtn: "Login ✨",
        error: "❌ Student ID not registered!",
        welcome: "Welcome ",
        portalSub: "Your academic schedule and attendance",
        scheduleTitle: "📅 Today's Schedule",
        course: "<strong>Course:</strong> Web Development",
        time: "<strong>Time:</strong> 10:00 - 12:00",
        logout: "Logout",
        regToggle: "➕ New Student? Register here",
        regTitle: "Register New Student",
        regIdPh: "Enter Student ID",
        regNamePh: "Full Name",
        genderDefault: "Select Gender",
        male: "Male 👨‍🎓",
        female: "Female 👩‍🎓",
        regSubmit: "Register ✅",
        footerText: "✨ © All rights reserved World of Nona 2026 🎓💫",
        dir: "ltr"
    },
    fr: {
        title: "🌸 Portail Étudiant",
        subtitle: "Veuillez entrer votre numéro d'étudiant",
        placeholder: "Numéro de carte universitaire",
        remember: "Se souvenir de moi:",
        opt1: "1 Jour 📅", opt2: "2 Jours 📅", opt7: "1 Semaine 🗓️", opt365: "Toujours ♾️",
        loginBtn: "Connexion ✨",
        error: "❌ Numéro non enregistré!",
        welcome: "Bienvenue ",
        portalSub: "Votre emploi du temps et présence",
        scheduleTitle: "📅 Emploi du temps du jour",
        course: "<strong>Matière :</strong> Développement Web",
        time: "<strong>Heure :</strong> 10:00 - 12:00",
        logout: "Déconnexion",
        regToggle: "➕ Nouvel étudiant ? Inscrivez-vous",
        regTitle: "Inscription d'un nouvel étudiant",
        regIdPh: "Numéro de carte (ID)",
        regNamePh: "Nom complet",
        genderDefault: "Sélectionner le genre",
        male: "Masculin 👨‍🎓",
        female: "Féminin 👩‍🎓",
        regSubmit: "S'inscrire ✅",
        footerText: "✨ © Tous droits réservés World of Nona 2026 🎓💫",
        dir: "ltr"
    },
    ar: {
        title: "🌸 بوابة الطلاب",
        subtitle: "يرجى إدخال رقم الطالب المعتمد للدخول",
        placeholder: "أدخل رقم البطاقة الجامعية",
        remember: "تذكرني لمدة:",
        opt1: "يوم واحد 📅", opt2: "يومان 📅", opt7: "أسبوع 🗓️", opt365: "دائماً ♾️",
        loginBtn: "دخول للبوابة ✨",
        error: "❌ رقم الطالب غير مسجل!",
        welcome: "مرحباً بك ",
        portalSub: "جدولك الأكاديمي وسجل الحضور",
        scheduleTitle: "📅 جدول اليوم",
        course: "<strong>المادة:</strong> برمجة وتطبيقات ويب",
        time: "<strong>التوقيت:</strong> 10:00 - 12:00",
        logout: "تسجيل الخروج",
        regToggle: "➕ طالب جديد؟ سجل هنا",
        regTitle: "تسجيل طالب جديد",
        regIdPh: "أدخل رقم بطاقة الطالب (ID)",
        regNamePh: "الاسم الكامل",
        genderDefault: "اختر الجنس",
        male: "ذكر 👨‍🎓",
        female: "أنثى 👩‍🎓",
        regSubmit: "تأكيد التسجيل ✅",
        footerText: "✨ © جميع الحقوق محفوظة لـ World of Nona 2026 🎓💫",
        dir: "rtl"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.dir = t.dir;
    document.getElementById('title-txt').innerText = t.title;
    document.getElementById('subtitle-txt').innerText = t.subtitle;
    document.getElementById('student-id').placeholder = t.placeholder;
    document.getElementById('remember-lbl').innerText = t.remember;
    document.getElementById('opt-1').innerText = t.opt1;
    document.getElementById('opt-2').innerText = t.opt2;
    document.getElementById('opt-7').innerText = t.opt7;
    document.getElementById('opt-365').innerText = t.opt365;
    document.getElementById('login-btn-txt').innerText = t.loginBtn;
    document.getElementById('error-msg').innerText = t.error;
    document.getElementById('portal-sub').innerText = t.portalSub;
    document.getElementById('schedule-title').innerText = t.scheduleTitle;
    document.getElementById('course-txt').innerHTML = t.course;
    document.getElementById('time-txt').innerHTML = t.time;
    document.getElementById('logout-btn-txt').innerText = t.logout;
    document.getElementById('reg-toggle-txt').innerText = t.regToggle;
    document.getElementById('reg-title').innerText = t.regTitle;
    document.getElementById('reg-id').placeholder = t.regIdPh;
    document.getElementById('reg-name').placeholder = t.regNamePh;
    document.getElementById('opt-gender-default').innerText = t.genderDefault;
    document.getElementById('opt-male').innerText = t.male;
    document.getElementById('opt-female').innerText = t.female;
    document.getElementById('reg-submit-txt').innerText = t.regSubmit;
    document.getElementById('footer-txt').innerText = t.footerText;
    updateDateTime();
}

let allowedStudents = JSON.parse(localStorage.getItem('customStudents')) || {
    "1001": { en: "Ahmed Mohamed (Student 1)", fr: "Ahmed Mohamed (Étudiant 1)", ar: "أحمد محمد (طالب 1)" },
    "1002": { en: "Fatima Zohra (Student 2)", fr: "Fatima Zohra (Étudiante 2)", ar: "فاطمة الزهراء (طالبة 2)" },
    "1003": { en: "Yassine Karim (Student 3)", fr: "Yassine Karim (Étudiant 3)", ar: "ياسين كريم (طالب 3)" }
};

function toggleRegisterForm() {
    const regBox = document.getElementById('register-box');
    regBox.style.display = regBox.style.display === 'block' ? 'none' : 'block';
}

function registerStudent() {
    const id = document.getElementById('reg-id').value.trim();
    const name = document.getElementById('reg-name').value.trim();
    const gender = document.getElementById('reg-gender').value;
    const email = document.getElementById('reg-email').value.trim();
    const errEl = document.getElementById('reg-error-msg');
    const succEl = document.getElementById('reg-success-msg');

    errEl.style.display = 'none';
    succEl.style.display = 'none';

    if (!id || !name || !gender || !email) {
        errEl.innerText = currentLang === 'ar' ? '⚠️ يرجى ملء جميع الحقول!' : '⚠️ Please fill all fields!';
        errEl.style.display = 'block';
        return;
    }

    if (!email.endsWith('@univ.bba.dz')) {
        errEl.innerText = currentLang === 'ar' ? '❌ البريد يجب أن ينتهي بـ @univ.bba.dz' : '❌ Email must end with @univ.bba.dz';
        errEl.style.display = 'block';
        return;
    }

    if (allowedStudents[id]) {
        errEl.innerText = currentLang === 'ar' ? '❌ رقم الطالب مسجل مسبقاً!' : '❌ Student ID already registered!';
        errEl.style.display = 'block';
        return;
    }

    allowedStudents[id] = { en: name, fr: name, ar: name };
    localStorage.setItem('customStudents', JSON.stringify(allowedStudents));

    succEl.innerText = currentLang === 'ar' ? '🎉 تم التسجيل بنجاح! يمكنك الدخول الآن.' : '🎉 Registered successfully! You can login now.';
    succEl.style.display = 'block';

    setTimeout(() => {
        document.getElementById('reg-id').value = '';
        document.getElementById('reg-name').value = '';
        document.getElementById('reg-gender').value = '';
        document.getElementById('reg-email').value = '';
        toggleRegisterForm();
        succEl.style.display = 'none';
    }, 2000);
}

function login() {
    const idInput = document.getElementById('student-id').value.trim();
    const errorMsg = document.getElementById('error-msg');
    
    if (allowedStudents[idInput]) {
        errorMsg.style.display = "none";
        document.getElementById('login-box').style.display = "none";
        document.getElementById('portal-content').style.display = "block";
        
        const studentName = allowedStudents[idInput][currentLang] || allowedStudents[idInput]['en'];
        const t = translations[currentLang];
        document.getElementById('welcome-msg').innerText = t.welcome + studentName + " 🌸";
        
        if(document.getElementById('remember-me').checked) {
            localStorage.setItem('savedStudentId', idInput);
        }
    } else {
        errorMsg.style.display = "block";
    }
}

function logout() {
    document.getElementById('portal-content').style.display = "none";
    document.getElementById('login-box').style.display = "block";
    document.getElementById('student-id').value = "";
    localStorage.removeItem('savedStudentId');
}

window.onload = function() {
    const savedId = localStorage.getItem('savedStudentId');
    if(savedId && allowedStudents[savedId]) {
        document.getElementById('student-id').value = savedId;
        document.getElementById('remember-me').checked = true;
    }
}
