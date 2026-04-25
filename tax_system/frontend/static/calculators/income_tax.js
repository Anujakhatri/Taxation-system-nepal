document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.tax-form');
    if (!form || !window.location.pathname.includes('income-tax')) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const income = parseFloat(form.querySelector('input[name="income"]').value);
        const maritalStatus = form.querySelector('select[name="marital_status"]').value;
        const employmentType = form.querySelector('select[name="employment_type"]').value;

        if (isNaN(income)) return;

        let taxRate = 0;

        // Replicating logic from views.py
        if (employmentType === "salary") {
            taxRate = 0.1;
            if (maritalStatus === "couple") {
                taxRate -= 0.01;
            }
        } else if (employmentType === "business") {
            taxRate = 0.15;
            if (maritalStatus === "couple") {
                taxRate -= 0.15;
            }
        } else if (employmentType === "foreign_employment") {
            taxRate = 0.05;
            if (maritalStatus === "couple") {
                taxRate -= 0.05;
            }
        } else {
            taxRate = 0.08;
            if (maritalStatus === "couple") {
                taxRate -= 0.08;
            }
        }

        const taxAmount = income * taxRate;
        const netAmount = income - taxAmount;

        displayResult(employmentType, income, taxRate * 100, taxAmount, netAmount);
    });

    function displayResult(type, amount, ratePercent, tax, net) {
        let resultBox = document.querySelector('.result-box');
        
        if (!resultBox) {
            resultBox = document.createElement('div');
            resultBox.className = 'result-box';
            form.after(resultBox);
        }

        const isNepali = document.body.classList.contains('nepali-font');
        
        const typeLabels = {
            'salary': { en: 'Salaried', ne: 'तलबभोगी' },
            'self_employed': { en: 'Self Employed', ne: 'स्वरोजगार' },
            'business': { en: 'Business Owner', ne: 'व्यवसाय मालिक' },
            'consultant': { en: 'Consultant', ne: 'परामर्शदाता' },
            'foreign_employment': { en: 'Foreign Employment', ne: 'वैदेशिक रोजगारी' },
            'pension': { en: 'Pension Income', ne: 'निवृत्तिभरण (पेन्सन)' }
        };

        const label = typeLabels[type] || { en: type, ne: type };

        resultBox.innerHTML = `
            <h3 data-en="Result" data-ne="नतिजा">${isNepali ? 'नतिजा' : 'Result'}</h3>

            <div class="result-row">
                <b data-en="Type:" data-ne="प्रकार:">${isNepali ? 'प्रकार:' : 'Type:'}</b>
                <span data-en="${label.en}" data-ne="${label.ne}">${isNepali ? label.ne : label.en}</span>
            </div>

            <div class="result-row">
                <b data-en="Amount:" data-ne="रकम:">${isNepali ? 'रकम:' : 'Amount:'}</b>
                <span>Rs. ${amount.toLocaleString()}</span>
            </div>

            <div class="result-row">
                <b data-en="Tax Rate:" data-ne="कर दर:">${isNepali ? 'कर दर:' : 'Tax Rate:'}</b>
                <span>${ratePercent.toFixed(2)}%</span>
            </div>

            <div class="result-row">
                <b data-en="Tax Amount:" data-ne="कर रकम:">${isNepali ? 'कर रकम:' : 'Tax Amount:'}</b>
                <span>Rs. ${tax.toLocaleString()}</span>
            </div>

            <div class="result-row total">
                <b data-en="Net Payment:" data-ne="शुद्ध भुक्तानी:">${isNepali ? 'शुद्ध भुक्तानी:' : 'Net Payment:'}</b>
                <span>Rs. ${net.toLocaleString()}</span>
            </div>
        `;
    }
});
