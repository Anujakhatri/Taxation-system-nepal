/* VAT CALCULATOR — JavaScript */

const VAT_RATE = 0.13;
const THRESHOLD = 5000000;
const THRESHOLD_BUFFER = 4500000;

let currentMode = 'exclusive';

function setMode(mode) {
    currentMode = mode;

    document.getElementById('modeExclusive').classList.toggle('active', mode === 'exclusive');
    document.getElementById('modeInclusive').classList.toggle('active', mode === 'inclusive');

    const isNepali = document.body.classList.contains('nepali-font');

    const hints = {
        exclusive: {
            en: 'Enter the price before VAT is applied',
            ne: 'भ्याट लागू हुनु अघिको मूल्य प्रविष्ट गर्नुहोस्'
        },
        inclusive: {
            en: 'Enter the price that already includes VAT',
            ne: 'भ्याट पहिले नै समावेश भएको मूल्य प्रविष्ट गर्नुहोस्'
        }
    };

    const labels = {
        exclusive: {
            en: 'Enter Amount without VAT (Rs.)',
            ne: 'भ्याट बिनाको रकम प्रविष्ट गर्नुहोस् (रु.)'
        },
        inclusive: {
            en: 'Enter Amount with VAT (Rs.)',
            ne: 'भ्याट सहितको रकम प्रविष्ट गर्नुहोस् (रु.)'
        }
    };

    const lang = isNepali ? 'ne' : 'en';
    document.getElementById('inputHint').textContent = hints[mode][lang];
    document.getElementById('inputLabel').textContent = labels[mode][lang];


    calculate();
}

// Main calculation

function calculate() {
    const raw = parseFloat(document.getElementById('amountInput').value);

    if (isNaN(raw) || raw <= 0) {
        resetDisplay();
        return;
    }

    let basePrice, vatAmount, totalPrice;

    if (currentMode === 'exclusive') {
        // User entered price WITHOUT VAT
        basePrice = raw;
        vatAmount = raw * VAT_RATE;
        totalPrice = raw + vatAmount;
    } else {
        // User entered price WITH VAT — extract base
        totalPrice = raw;
        basePrice = raw / (1 + VAT_RATE);
        vatAmount = raw - basePrice;
    }

    displayResults(basePrice, vatAmount, totalPrice);
}


function displayResults(base, vat, total) {
    setAnimatedValue('basePrice', formatNPR(base));
    setAnimatedValue('vatAmount', formatNPR(vat));
    setAnimatedValue('totalPrice', formatNPR(total));
}

function setAnimatedValue(id, value) {
    const el = document.getElementById(id);
    el.textContent = value;
    el.classList.remove('updated');
    // Force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('updated');
}

function resetDisplay() {
    ['basePrice', 'vatAmount', 'totalPrice'].forEach(id => {
        document.getElementById(id).textContent = 'रु. —';
    });
}

function resetCalc() {
    document.getElementById('amountInput').value = '';
    resetDisplay();
}

// NPR nepali style format

function formatNPR(amount) {
    const fixed = amount.toFixed(2);
    const [intPart, decPart] = fixed.split('.');

    const formatted = intPart.replace(/\B(?=(\d\d)+(?!\d)$)(?<=\d{3,})/g, ',') ||
        intPart.replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');

    const num = parseInt(intPart, 10);
    const sas = toSouthAsianFormat(num);

    return `रु. ${sas}.${decPart}`;
}

function toSouthAsianFormat(n) {
    if (n < 0) return '-' + toSouthAsianFormat(-n);
    const s = n.toString();
    if (s.length <= 3) return s;

    // Last 3 digits, then groups of 2
    const last3 = s.slice(-3);
    const rest = s.slice(0, -3);
    const groups = rest.replace(/(\d)(?=(\d\d)+$)/g, '$1,');
    return groups + ',' + last3;
}

//Registration checker

function checkRegistration() {
    const raw = parseFloat(document.getElementById('turnoverInput').value);
    const resultDiv = document.getElementById('registrationResult');
    const statusDiv = document.getElementById('regStatus');

    if (isNaN(raw) || raw <= 0) {
        resultDiv.style.display = 'none';
        return;
    }

    resultDiv.style.display = 'block';
    const isNepali = document.body.classList.contains('nepali-font');

    let cssClass, icon, titleEn, titleNe, descEn, descNe;

    if (raw >= THRESHOLD) {
        cssClass = 'must-register';
        icon = '⚠️';
        titleEn = 'VAT Registration Required';
        titleNe = 'भ्याट दर्ता अनिवार्य छ';
        descEn = `Your turnover of ${formatNPR(raw)} exceeds the Rs. 50 lakh threshold. You must register with the Inland Revenue Department immediately.`;
        descNe = `तपाईंको ${formatNPR(raw)} कारोबार रु. ५० लाखको सीमा नाघेको छ। तपाईंले तुरुन्त आन्तरिक राजस्व विभागमा दर्ता गर्नु पर्छ।`;
    } else if (raw >= THRESHOLD_BUFFER) {
        cssClass = 'borderline';
        icon = '🚨';
        titleEn = 'Approaching the Threshold';
        titleNe = 'सीमा नजिक पुग्दै';
        descEn = `Your turnover is close to Rs. 50 lakhs. Monitor your sales carefully — once you cross the threshold you must register.`;
        descNe = `तपाईंको कारोबार रु. ५० लाखको नजिक छ। आफ्नो बिक्री ध्यानपूर्वक हेर्नुहोस् — सीमा नाघेपछि दर्ता अनिवार्य हुन्छ।`;
    } else {
        cssClass = 'no-register';
        icon = '✅';
        titleEn = 'Registration Not Required';
        titleNe = 'दर्ता आवश्यक छैन';
        descEn = `Your turnover of ${formatNPR(raw)} is below Rs. 50 lakhs. VAT registration is optional but you can register voluntarily.`;
        descNe = `तपाईंको ${formatNPR(raw)} कारोबार रु. ५० लाखभन्दा कम छ। भ्याट दर्ता ऐच्छिक छ तर तपाईं ऐच्छिक रूपमा दर्ता गर्न सक्नुहुन्छ।`;
    }

    statusDiv.className = `reg-status ${cssClass}`;
    document.getElementById('regIcon').textContent = icon;
    document.getElementById('regTitle').textContent = isNepali ? titleNe : titleEn;
    document.getElementById('regDesc').textContent = isNepali ? descNe : descEn;
}


const _originalSetLanguage = window.setLanguage;
window.setLanguage = function (lang) {
    if (_originalSetLanguage) _originalSetLanguage(lang);
    // Re-apply mode so hints update to new language
    setMode(currentMode);
    // Re-run registration result if there's a value
    checkRegistration();
};