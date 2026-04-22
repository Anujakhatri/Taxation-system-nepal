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