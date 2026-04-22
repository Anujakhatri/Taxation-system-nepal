/* NAVBAR COMPONENT — JavaScript
    Handles: language toggle, mobile menu,
    bilingual content switching */


function setLanguage(lang) {
    const isEnglish = lang === 'en';

    document.getElementById('btnNepali').classList.toggle('active', !isEnglish);
    document.getElementById('btnEnglish').classList.toggle('active', isEnglish);

    const logoNe = document.getElementById('logoImageNe');
    const logoEn = document.getElementById('logoImageEn');
    if (logoNe && logoEn) {
        logoNe.style.display = isEnglish ? 'none' : 'block';
        logoEn.style.display = isEnglish ? 'block' : 'none';
    }


    document.body.classList.toggle('nepali-font', !isEnglish);

    document.querySelectorAll('[data-en][data-ne]').forEach(el => {
        el.innerHTML = isEnglish
            ? el.getAttribute('data-en')
            : el.getAttribute('data-ne');
    });

    localStorage.setItem('preferredLanguage', lang);

    console.log('Language switched to:', lang);
}

// ── Mobile menu toggle ──

(function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('header nav');

    if (!mobileMenuBtn || !nav) return;

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}());

// ── Restore saved language on page load ──

(function restoreLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved === 'en' || saved === 'ne') {
        setLanguage(saved);
    }
}());