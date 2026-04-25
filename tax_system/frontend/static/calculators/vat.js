/* VAT CALCULATOR — JavaScript Implementation */

document.addEventListener('DOMContentLoaded', function () {
    const calcBtn = document.getElementById('calc-btn');
    const resetBtn = document.getElementById('reset-btn');
    const amountInput = document.getElementById('vat_amount');
    
    // Result Elements
    const resBase = document.getElementById('res-base');
    const resVat = document.getElementById('res-vat');
    const resTotal = document.getElementById('res-total');
    const resultContent = document.getElementById('result-content');
    const resultPlaceholder = document.getElementById('result-placeholder');
    
    // Visual Elements
    const barBase = document.getElementById('bar-base');
    const barVat = document.getElementById('bar-vat');

    if (calcBtn) {
        calcBtn.addEventListener('click', calculateVAT);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetCalculator);
    }

    function calculateVAT() {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        // Get selected Mode (Add VAT or Extract VAT)
        const mode = document.querySelector('input[name="vat_mode"]:checked').value;
        
        // Get selected Rate
        const ratePercent = parseFloat(document.querySelector('input[name="vat_rate"]:checked').value);
        const rate = ratePercent / 100;

        let baseAmount, vatAmount, totalAmount;

        if (mode === 'add') {
            // Add VAT to Price
            baseAmount = amount;
            vatAmount = baseAmount * rate;
            totalAmount = baseAmount + vatAmount;
        } else {
            // Extract VAT from Price
            totalAmount = amount;
            baseAmount = totalAmount / (1 + rate);
            vatAmount = totalAmount - baseAmount;
        }

        // Update UI
        displayResults(baseAmount, vatAmount, totalAmount, ratePercent);
    }

    function displayResults(base, vat, total, rate) {
        resBase.textContent = formatNPR(base);
        resVat.textContent = formatNPR(vat);
        resTotal.textContent = formatNPR(total);

        // Update VAT row label if needed
        const vatLabel = document.querySelector('.vat-row.accent span[data-en^="VAT Amount"]');
        if (vatLabel) {
            vatLabel.textContent = `भ्याट रकम (${rate}%)`;
            vatLabel.setAttribute('data-en', `VAT Amount (${rate}%)`);
            vatLabel.setAttribute('data-ne', `भ्याट रकम (${rate}%)`);
        }

        // Update Visual Bars
        const totalSum = base + vat;
        const baseWidth = (base / totalSum) * 100;
        const vatWidth = (vat / totalSum) * 100;

        if (barBase) barBase.style.width = `${baseWidth}%`;
        if (barVat) barVat.style.width = `${vatWidth}%`;

        // Show results
        resultPlaceholder.classList.add('hidden');
        resultContent.classList.remove('hidden');
        
        // Add updated animation class
        [resBase, resVat, resTotal].forEach(el => {
            el.classList.remove('updated');
            void el.offsetWidth; // Trigger reflow
            el.classList.add('updated');
        });
    }

    function resetCalculator() {
        amountInput.value = '';
        resultContent.classList.add('hidden');
        resultPlaceholder.classList.remove('hidden');
        
        resBase.textContent = 'रू. ०';
        resVat.textContent = 'रू. ०';
        resTotal.textContent = 'रू. ०';
        
        if (barBase) barBase.style.width = '0%';
        if (barVat) barVat.style.width = '0%';
    }

    function formatNPR(amount) {
        // Round to 2 decimal places
        const formatted = new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
        
        return `रू. ${formatted}`;
    }
});