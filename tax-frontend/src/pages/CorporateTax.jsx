import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateCorporateTax } from '../utils/taxCalculators';
import '../styles/home.css';
import '../styles/shared_tax.css';
import '../styles/tds_calculation.css';

const CorporateTax = () => {
    const { t } = useTranslation();
    const [profit, setProfit] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [isListed, setIsListed] = useState(false);
    const [result, setResult] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        const profitValue = parseFloat(profit);
        if (!profitValue || profitValue <= 0) {
            alert("Please enter valid profit");
            return;
        }
        setResult(calculateCorporateTax(profitValue, companyType, isListed));
    };

    return (
        <div className="tax-layout">
            {/* Left Side: Slab/Rate Reference */}
            <div className="slab-reference">
                <h2>{t('business.corporate_tax_rates', 'Corporate Tax Rates — FY 2082/83')}</h2>
                <div className="rate-grid">
                    <div className="rate-card">
                        <span className="rate-badge">२५%</span>
                        <p>{t('business.general_business', 'General Business')}</p>
                    </div>
                    <div className="rate-card">
                        <span className="rate-badge">३०%</span>
                        <p>{t('business.bank', 'Bank / Telecom / Insurance')}</p>
                    </div>
                    <div className="rate-card">
                        <span className="rate-badge">२०%</span>
                        <p>{t('business.special_industries', 'Special Industry (Hydropower, Manufacturing, etc.)')}</p>
                    </div>
                    <div className="rate-card">
                        <span className="rate-badge">५%</span>
                        <p>{t('business.listed_companies', 'Listed Company Rebate (Conditional)')}</p>
                    </div>
                </div>
                <p className="slab-note" style={{ marginTop: '10px', fontSize: '0.9em', opacity: 0.8 }}>
                    {t('business.note', 'Note: Listed companies may receive up to 5% tax rebate based on public shareholding and compliance. This is not a flat rate reduction.')}
                </p>
            </div>

            {/* Right Side: Calculator Section */}
            <div className="tax-page">
                <h2 className="calculator-title">{t('tax_calculator.corporate_tax_calculator', 'Corporate Tax Calculator')}</h2>
                <p className="calculator-subtitle">
                    {t('business.latest_updates', 'Calculate your business tax according to latest Nepal rates')}
                </p>

                <div className="tax-card">
                    <form className="tax-form" onSubmit={handleCalculate}>
                        <div className="form-group">
                            <label>
                                <span>{t('form.annual_net_profit', 'Annual Net Profit')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="number"
                                placeholder={t('form.enter_amount', 'Enter amount')}
                                required
                                value={profit}
                                onChange={(e) => setProfit(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <span>{t('form.company_type', 'Company Type')}</span>
                                <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                required
                                value={companyType}
                                onChange={(e) => setCompanyType(e.target.value)}
                            >
                                <option value="">{t('form.select_type', 'Select type')}</option>
                                <option value="general">{t('business.general_business', 'General Business')}</option>
                                <option value="bank">{t('business.bank', 'Bank / Telecom / Insurance')}</option>
                                <option value="special">{t('business.special_industry', 'Special Industry')}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    style={{ width: 'auto', margin: 0 }}
                                    checked={isListed}
                                    onChange={(e) => setIsListed(e.target.checked)}
                                />
                                <span>{t('business.listed_company_eligible', 'Listed Company (Eligible for Rebate)')}</span>
                            </label>
                        </div>

                        <button type="submit" className="calc-btn">
                            {t('tax_calculator.calculate_tax', 'Calculate Tax')}
                        </button>
                    </form>

                    <div id="corporate-tax-result-container">
                        {result !== null && (
                            <div className="result-box">
                                <h3>{t('form.result', 'Result')}</h3>
                                <div className="result-row">
                                    <b>{t('form.total_tax', 'Total Tax:')}</b>
                                    <span>NPR {result.tax.toFixed(2)}</span>
                                </div>
                                <div className="result-row">
                                    <b>{t('form.effective_tax_rate', 'Effective Tax Rate:')}</b>
                                    <span>{result.effectiveRate.toFixed(2)}%</span>
                                </div>
                                <div className="result-row">
                                    <b>{t('form.applied_rate', 'Applied Rate:')}</b>
                                    <span>{result.appliedRate}%</span>
                                </div>
                                {isListed && (
                                    <div className="result-row total">
                                        <b>{t('form.rebate', 'Rebate:')}</b>
                                        <span>NPR {result.rebate.toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateTax;
