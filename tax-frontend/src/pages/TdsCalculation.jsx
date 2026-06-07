import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateTDS } from '../utils/taxCalculators';
import '../styles/home.css';
import '../styles/shared_tax.css';
import '../styles/tds_calculation.css';

const TdsCalculation = () => {
    const { t } = useTranslation();
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue)) return;
        setResult(calculateTDS(type, amountValue));
    };

    const typeLabels = {
        'salary': t('tds.salary', 'Salary'),
        'rent': t('tds.rent', 'Rent'),
        'service': t('tds.service', 'Service'),
        'dividend': t('tds.dividend', 'Dividend'),
        'interest': t('tds.interest', 'Interest')
    };

    return (
        <div className="tax-layout">
            {/* LEFT SECTION: TDS Reference */}
            <div className="slab-reference">
                <h2>{t('tds.reference_title', 'TDS Rates Reference — Nepal (FY 2082/83)')}</h2>

                <div className="slab-tables">
                    {/* Rates Card */}
                    <div className="slab-table-card">
                        <h3>{t('tds.common_rates', 'Common TDS Rates')}</h3>
                        <table className="tax-table">
                            <thead>
                                <tr>
                                    <th>{t('tds.payment_type', 'Payment Type')}</th>
                                    <th>{t('tds.tds_rate', 'TDS Rate')}</th>
                                    <th>{t('tds.section', 'Section')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('tds.salary_employment', 'Salary / Employment')}</td>
                                    <td>{t('tds.slab_wise', 'SLAB-WISE')}</td>
                                    <td>87</td>
                                </tr>
                                <tr>
                                    <td>{t('tds.house_rent', 'House Rent (Individual)')}</td>
                                    <td>10%</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <td>{t('tds.contract_service', 'Contract / Service')}</td>
                                    <td>1.5% – 15%</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <td>{t('tds.consultancy_fee', 'Consultancy Fee')}</td>
                                    <td>15%</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <td>{t('tds.bank_interest', 'Bank Interest')}</td>
                                    <td>5%</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <td>{t('tds.dividend', 'Dividend')}</td>
                                    <td>5%</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <td>{t('tds.windfall_gain', 'Windfall Gain (Lottery)')}</td>
                                    <td>25%</td>
                                    <td>88</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="slab-note" style={{ marginTop: '10px' }}>
                            {t('tds.note', '* Rates may vary based on residency and specific IRD directives.')}
                        </p>
                    </div>

                    {/* Compliance Card */}
                    <div className="slab-table-card">
                        <h3>{t('tds.compliance_rules', 'TDS Compliance Rules')}</h3>
                        <div className="compliance-info" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            <p>•
                                <strong>{t('tds.deposit_deadline', 'Deposit Deadline:')}</strong>
                                <span>{t('tds.deposit_desc', 'Within 25 days from the end of the month.')}</span>
                            </p>
                            <p>•
                                <strong>{t('tds.filing', 'Filing:')}</strong>
                                <span>{t('tds.filing_desc', 'Monthly filing through IRD e-portal (E-filing).')}</span>
                            </p>
                            <p>•
                                <strong>{t('tds.certificate', 'Certificate:')}</strong>
                                <span>{t('tds.certificate_desc', 'Deductor must issue a TDS certificate to the payee.')}</span>
                            </p>
                            <p>•
                                <strong>{t('tds.penalty', 'Penalty:')}</strong>
                                <span>{t('tds.penalty_desc', 'Delay in deposit or filing may result in fines and interest charges.')}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION: TDS Calculator */}
            <div className="tax-page">
                <h2 className="calculator-title">{t('tds.tds_calculator', 'TDS Calculator')}</h2>
                <p className="calculator-subtitle">
                    {t('tds.tds_calculator_subtitle', 'Calculate Tax Deducted at Source (TDS) based on Nepal\'s tax laws')}
                </p>

                <div className="tax-card">
                    <form className="tax-form" onSubmit={handleCalculate}>
                        <div className="form-group">
                            <label>
                                <span>{t('tds.payment_type', 'Payment Type')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="">{t('tds.select_payment_type', 'Select Payment Type')}</option>
                                <option value="salary">{t('tds.salary', 'Salary')}</option>
                                <option value="rent">{t('tds.rent', 'Rent')}</option>
                                <option value="service">{t('tds.service', 'Service')}</option>
                                <option value="dividend">{t('tds.dividend', 'Dividend')}</option>
                                <option value="interest">{t('tds.interest', 'Interest')}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>
                                <span>{t('form.amount', 'Amount')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="number"
                                required
                                placeholder={t('form.enter_amount', 'Enter amount')}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="calc-btn">
                            {t('tds.calculate_tds', 'Calculate TDS')}
                        </button>
                    </form>

                    <div id="tds-result-container">
                        {result && (
                            <div className="result-box">
                                <h3>{t('tds.calculation_result', 'Calculation Result')}</h3>

                                <div className="result-row">
                                    <b>{t('tds.payment_type_label', 'Payment Type:')}</b>
                                    <span>{typeLabels[type] || type}</span>
                                </div>

                                <div className="result-row">
                                    <b>{t('tds.base_amount', 'Base Amount:')}</b>
                                    <span>Rs. {parseFloat(amount).toLocaleString()}</span>
                                </div>

                                <div className="result-row">
                                    <b>{t('tds.tds_rate_label', 'TDS Rate:')}</b>
                                    <span>{result.ratePercent}%</span>
                                </div>

                                <div className="result-row">
                                    <b>{t('tds.tds_deducted', 'TDS Deducted:')}</b>
                                    <span>Rs. {result.tdsAmount.toLocaleString()}</span>
                                </div>

                                <div className="result-row total">
                                    <b>{t('tds.net_payable', 'Net Payable:')}</b>
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

export default TdsCalculation;
