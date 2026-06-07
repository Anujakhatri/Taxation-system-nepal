import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateIncomeTax } from '../utils/taxCalculators';
import '../styles/home.css';
import '../styles/shared_tax.css';
import '../styles/tds_calculation.css';

const IncomeTax = () => {
    const { t } = useTranslation();
    const [income, setIncome] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        const incomeValue = parseFloat(income);
        if (isNaN(incomeValue) || incomeValue <= 0) return;
        setResult(calculateIncomeTax(incomeValue, maritalStatus, employmentType));
    };

    const typeLabels = {
        'salary': t('employment.salary', 'Salaried'),
        'self_employed': t('employment.self_employed', 'Self Employed'),
        'business': t('employment.business', 'Business Owner'),
        'consultant': t('employment.consultant', 'Consultant'),
        'foreign_employment': t('employment.foreign', 'Foreign Employment'),
        'pension': t('employment.pension', 'Pension Income')
    };

    return (
        <div className="tax-layout">
            <div className="slab-reference">
                <h2>{t('slabs.income_tax_title', 'FY 2082/83 — Income Tax Slabs (Nepal)')}</h2>
                <div className="slab-tables">
                    <div className="slab-table-card">
                        <h3>{t('slabs.unmarried', 'Unmarried')}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('slabs.taxable_income', 'Taxable Income (NPR)')}</th>
                                    <th>{t('slabs.tax_rate', 'Tax Rate')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>{t('slabs.up_to_5l', 'Up to 5,00,000')}</td><td>1%</td></tr>
                                <tr><td>{t('slabs.5l_to_7l', '5,00,001 – 7,00,000')}</td><td>10%</td></tr>
                                <tr><td>{t('slabs.7l_to_10l', '7,00,001 – 10,00,000')}</td><td>20%</td></tr>
                                <tr><td>{t('slabs.10l_to_20l', '10,00,001 – 20,00,000')}</td><td>30%</td></tr>
                                <tr><td>{t('slabs.above_20l', 'Above 20,00,000')}</td><td>36%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="slab-table-card">
                        <h3>{t('slabs.married', 'Married / Family')}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('slabs.taxable_income', 'Taxable Income (NPR)')}</th>
                                    <th>{t('slabs.tax_rate', 'Tax Rate')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>{t('slabs.up_to_6l', 'Up to 6,00,000')}</td><td>1%</td></tr>
                                <tr><td>{t('slabs.6l_to_8l', '6,00,001 – 8,00,000')}</td><td>10%</td></tr>
                                <tr><td>{t('slabs.8l_to_11l', '8,00,001 – 11,00,000')}</td><td>20%</td></tr>
                                <tr><td>{t('slabs.11l_to_20l', '11,00,001 – 20,00,000')}</td><td>30%</td></tr>
                                <tr><td>{t('slabs.above_20l', 'Above 20,00,000')}</td><td>36%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="slab-note">
                    {t('slabs.surcharge_note', '* Additional 1% to 39% tax surcharge applied on income above NPR 50,00,000.')}
                </p>
            </div>

            <div className="tax-page">
                <h2 className="calculator-title">{t('tax_calculator.income_tax_calculator', 'Income Tax Calculator')}</h2>
                <p className="calculator-subtitle">
                    {t('tax_calculator.income_tax_subtitle', 'Calculate your tax easily using Nepal tax system')}
                </p>

                <div className="tax-card">
                    <form className="tax-form" onSubmit={handleCalculate}>
                        <div className="form-group">
                            <label>
                                <span>{t('form.annual_income', 'Annual Income')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="number"
                                placeholder={t('form.enter_income', 'Enter your income')}
                                required
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <span>{t('form.marital_status', 'Marital Status')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                required
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                            >
                                <option value="">{t('form.select_marital_status', 'Select Marital Status')}</option>
                                <option value="single">{t('form.single', 'Single')}</option>
                                <option value="couple">{t('form.couple', 'Couple')}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>
                                <span>{t('form.employment_type', 'Employment Type')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <small>{t('form.select_main_source', 'Select your main source of income')}</small>
                            <select
                                required
                                value={employmentType}
                                onChange={(e) => setEmploymentType(e.target.value)}
                            >
                                <option value="">{t('form.select_employment_type', 'Select Employment Type')}</option>
                                <option value="salary">{t('form.salaried', 'Salaried (Government/Private Job)')}</option>
                                <option value="self_employed">{t('form.self_employed', 'Self Employed / Freelancer')}</option>
                                <option value="business">{t('form.business_owner', 'Business Owner')}</option>
                                <option value="consultant">{t('form.consultant', 'Consultant / Professional')}</option>
                                <option value="foreign_employment">{t('form.foreign_employment', 'Foreign Employment')}</option>
                                <option value="pension">{t('form.pension_income', 'Pension Income')}</option>
                            </select>
                        </div>
                        <button type="submit" className="calc-btn">
                            {t('tax_calculator.calculate_tax', 'Calculate Tax')}
                        </button>
                    </form>

                    <div id="income-tax-result-container">
                        {result && (
                            <div className="result-box">
                                <h3>{t('form.result', 'Result')}</h3>
                                <div className="result-row">
                                    <b>{t('form.type', 'Type:')}</b>
                                    <span>{typeLabels[employmentType] || employmentType}</span>
                                </div>
                                <div className="result-row">
                                    <b>{t('form.amount', 'Amount:')}</b>
                                    <span>Rs. {parseFloat(income).toLocaleString()}</span>
                                </div>
                                <div className="result-row">
                                    <b>{t('form.tax_rate', 'Tax Rate:')}</b>
                                    <span>{result.taxRatePercent.toFixed(2)}%</span>
                                </div>
                                <div className="result-row">
                                    <b>{t('form.tax_amount', 'Tax Amount:')}</b>
                                    <span>Rs. {result.taxAmount.toLocaleString()}</span>
                                </div>
                                <div className="result-row total">
                                    <b>{t('form.net_payment', 'Net Payment:')}</b>
                                    <span>Rs. {result.netAmount.toLocaleString()}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeTax;
