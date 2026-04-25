// ── Smooth scroll for in-page anchor links & buttons ──────────────────────────

document.querySelectorAll('a[href^="#"], #calc-tax-btn, #get-started-btn').forEach(element => {
    element.addEventListener('click', function (e) {
        let targetSelector;
        
        if (this.tagName === 'A') {
            targetSelector = this.getAttribute('href');
            if (targetSelector === '#') return;
        } else {
            // Specifically for the 'Calculate Tax' and 'Get Started' buttons
            targetSelector = '#quick-access-section';
        }

        const target = document.querySelector(targetSelector);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Card hover transition (CSS handles most of it, this ensures transition is set) ──
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});
