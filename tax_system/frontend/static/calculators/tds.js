document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.tax-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const type = form.querySelector('select[name="type"]').value;
        const amount = parseFloat(form.querySelector('input[name="amount"]').value);

        if (isNaN(amount)) return;

        let rate = 0;
        switch (type) {
            case 'salary':
                rate = 0.10;
                break;
            case 'rent':
                rate = 0.10;
                break;
            case 'service':
                rate = 0.15;
                break;
            case 'dividend':
                rate = 0.05;
                break;
            case 'interest':
                rate = 0.05;
                break;
            default:
                rate = 0;
        }

        const tdsAmount = amount * rate;
        const netAmount = amount - tdsAmount;

        displayResult(type, amount, rate * 100, tdsAmount, netAmount);
    });

    function displayResult(type, amount, ratePercent, tds, net) {
        let resultBox = document.querySelector('.result-box');
        
        // If result box doesn't exist (first calculation), create it
        if (!resultBox) {
            resultBox = document.createElement('div');
            resultBox.className = 'result-box';
            form.after(resultBox);
        }

        const isNepali = document.body.classList.contains('nepali-font');
        
        const typeLabels = {
            'salary': { en: 'Salary', ne: 'तलब' },
            'rent': { en: 'Rent', ne: 'भाडा' },
            'service': { en: 'Service', ne: 'सेवा' },
            'dividend': { en: 'Dividend', ne: 'लाभांश' },
            'interest': { en: 'Interest', ne: 'ब्याज' }
        };

        const label = typeLabels[type] || { en: type, ne: type };

        resultBox.innerHTML = `
            <h3 data-en="Calculation Result" data-ne="गणना नतिजा">
                ${isNepali ? 'गणना नतिजा' : 'Calculation Result'}
            </h3>
            
            <div class="result-row">
                <b data-en="Payment Type:" data-ne="भुक्तानी प्रकार:">${isNepali ? 'भुक्तानी प्रकार:' : 'Payment Type:'}</b>
                <span data-en="${label.en}" data-ne="${label.ne}">${isNepali ? label.ne : label.en}</span>
            </div>

            <div class="result-row">
                <b data-en="Base Amount:" data-ne="कुल रकम:">${isNepali ? 'कुल रकम:' : 'Base Amount:'}</b>
                <span>Rs. ${amount.toLocaleString()}</span>
            </div>

            <div class="result-row">
                <b data-en="TDS Rate:" data-ne="टीडीएस दर:">${isNepali ? 'टीडीएस दर:' : 'TDS Rate:'}</b>
                <span>${ratePercent}%</span>
            </div>

            <div class="result-row">
                <b data-en="TDS Deducted:" data-ne="कट्टा रकम:">${isNepali ? 'कट्टा रकम:' : 'TDS Deducted:'}</b>
                <span>Rs. ${tds.toLocaleString()}</span>
            </div>

            <div class="result-row total">
                <b data-en="Net Payable:" data-ne="शुद्ध भुक्तानी:">${isNepali ? 'शुद्ध भुक्तानी:' : 'Net Payable:'}</b>
                <span>Rs. ${net.toLocaleString()}</span>
            </div>
        `;
    }
});
