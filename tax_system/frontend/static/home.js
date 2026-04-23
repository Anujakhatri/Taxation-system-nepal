// ── Card hover transition (CSS handles most of it, this ensures transition is set) ──

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});

// ── Smooth scroll for in-page anchor links ──────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        if (targetSelector === '#') return; // skip bare "#" links

        const target = document.querySelector(targetSelector);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Smooth scroll for 'Calculate Tax' button ────────────────────────────────
const calcTaxBtn = document.getElementById('calc-tax-btn');
if (calcTaxBtn) {
    calcTaxBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById('quick-access-section');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ── Smooth scroll for 'Get Started Now' button ──────────────────────────────
const getStartedBtn = document.getElementById('get-started-btn');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById('quick-access-section');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
