export const calculateCorporateTax = (profit, companyType, isListed) => {
    let taxRate = 0;
    switch (companyType) {
        case "general":
            taxRate = 0.25;
            break;
        case "bank":
            taxRate = 0.30;
            break;
        case "special":
            taxRate = 0.20;
            break;
        default:
            taxRate = 0;
    }

    let tax = profit * taxRate;
    let rebate = 0;
    if (isListed) {
        rebate = tax * 0.05;
        tax -= rebate;
    }

    const effectiveRate = (tax / profit) * 100;
    return { tax, rebate, effectiveRate, appliedRate: taxRate * 100 };
};

export const calculateIncomeTax = (income, maritalStatus, employmentType) => {
    let taxRate = 0;
    if (employmentType === "salary") {
        taxRate = 0.1;
        if (maritalStatus === "couple") taxRate -= 0.01;
    } else if (employmentType === "business") {
        taxRate = 0.15;
        if (maritalStatus === "couple") taxRate -= 0.15;
    } else if (employmentType === "foreign_employment") {
        taxRate = 0.05;
        if (maritalStatus === "couple") taxRate -= 0.05;
    } else {
        taxRate = 0.08;
        if (maritalStatus === "couple") taxRate -= 0.08;
    }

    const taxAmount = income * taxRate;
    const netAmount = income - taxAmount;

    return { taxAmount, netAmount, taxRatePercent: taxRate * 100 };
};

export const calculateTDS = (type, amount) => {
    let rate = 0;
    switch (type) {
        case 'salary': rate = 0.10; break;
        case 'rent': rate = 0.10; break;
        case 'service': rate = 0.15; break;
        case 'dividend': rate = 0.05; break;
        case 'interest': rate = 0.05; break;
        default: rate = 0;
    }

    const tdsAmount = amount * rate;
    const netAmount = amount - tdsAmount;

    return { tdsAmount, netAmount, ratePercent: rate * 100 };
};

export const calculateVAT = (amount, mode, ratePercent) => {
    const rate = ratePercent / 100;
    let baseAmount, vatAmount, totalAmount;

    if (mode === 'add') {
        baseAmount = amount;
        vatAmount = baseAmount * rate;
        totalAmount = baseAmount + vatAmount;
    } else {
        totalAmount = amount;
        baseAmount = totalAmount / (1 + rate);
        vatAmount = totalAmount - baseAmount;
    }

    return { baseAmount, vatAmount, totalAmount };
};
