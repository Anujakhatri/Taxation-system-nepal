import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateVAT } from '../utils/taxCalculators';
import '../styles/home.css';
import '../styles/shared_tax.css';
import '../styles/vat.css';

const Vat = () => {
    const { t } = useTranslation();
    const [amount, setAmount] = useState('');
    const [vatMode, setVatMode] = useState('add');
    const [vatRate, setVatRate] = useState(13);
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue) || amountValue <= 0) {
            alert("Please enter a valid amount");
            return;
        }
        setResult(calculateVAT(amountValue, vatMode, vatRate));
    };

    const handleReset = () => {
        setAmount('');
        setResult(null);
    };

    // Calculate bar widths if result exists
    let baseWidth = '0%';
    let vatWidth = '0%';
    if (result) {
        const totalSum = result.baseAmount + result.vatAmount;
        baseWidth = totalSum > 0 ? `${(result.baseAmount / totalSum) * 100}%` : '0%';
        vatWidth = totalSum > 0 ? `${(result.vatAmount / totalSum) * 100}%` : '0%';
    }

    return (
        <div className="calc-page vat">
            <div className="tax-layout">
                {/* LEFT SECTION: VAT Information */}
                <div className="tax-slab-section">
                    <h2 className="calculator-title" style={{ marginBottom: '1.5rem' }}>{t('vat.vat_info', 'VAT Information')}</h2>
                    <div id="tab-info" className="tab-content active">
                        <div className="slab-tables">
                            {/* Standard VAT Rate Card */}
                            <div className="slab-table-card">
                                <h3>{t('vat.standard_rate', 'Standard VAT Rate')}</h3>
                                <p className="big-stat" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-teal)', marginBottom: '0.5rem' }}>
                                    13%
                                </p>
                                <p>{t('vat.standard_rate_desc', 'Nepal charges a flat 13% VAT on most goods and services.')}</p>
                            </div>

                            {/* Registration Threshold Card */}
                            <div className="slab-table-card">
                                <h3>{t('vat.registration_threshold', 'VAT Registration Threshold')}</h3>
                                <p className="big-stat" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-light)', marginBottom: '0.5rem' }}>
                                    रू. ५०,००,०००
                                </p>
                                <p>{t('vat.registration_threshold_desc', 'Businesses with annual turnover above NPR 50,00,000 must register for VAT.')}</p>
                            </div>

                            {/* Filing Period Card */}
                            <div className="slab-table-card">
                                <h3>{t('vat.filing_period', 'VAT Filing Period')}</h3>
                                <p className="big-stat" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-light)', marginBottom: '0.5rem' }}>
                                    {t('vat.monthly', 'Monthly')}
                                </p>
                                <p>{t('vat.filing_period_desc', 'VAT returns must be filed monthly within 25 days after the end of each month.')}</p>
                            </div>

                            {/* Exempt Goods Card */}
                            <div className="slab-table-card">
                                <h3>{t('vat.exempt_goods', 'VAT-Exempt Goods & Services')}</h3>
                                <ul className="exempt-list" style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '14px' }}>
                                    <li>{t('vat.exempt_1', 'Basic food items (rice, flour, vegetables, etc.)')}</li>
                                    <li>{t('vat.exempt_2', 'Medical services and medicines')}</li>
                                    <li>{t('vat.exempt_3', 'Educational services')}</li>
                                    <li>{t('vat.exempt_4', 'Agricultural inputs')}</li>
                                    <li>{t('vat.exempt_5', 'Books and printed materials')}</li>
                                    <li>{t('vat.exempt_6', 'Financial and insurance services')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="tab-registration" className="tab-content active" style={{ marginTop: '3rem' }}>
                        <h2 className="calculator-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            {t('vat.how_to_register', 'How to Register for VAT')}
                        </h2>
                        <div className="slab-tables">
                            <div className="slab-table-card">
                                <h3>{t('vat.step1_title', '1. PAN Registration')}</h3>
                                <p>{t('vat.step1_desc', "Obtain a Permanent Account Number (PAN) from the Inland Revenue Department (IRD) if you don't already have one.")}</p>
                            </div>
                            <div className="slab-table-card">
                                <h3>{t('vat.step2_title', '2. Prepare Documents')}</h3>
                                <p>{t('vat.step2_desc', 'Business registration certificate, citizenship copy, PAN card, and recent bank statement.')}</p>
                            </div>
                            <div className="slab-table-card">
                                <h3>{t('vat.step3_title', '3. Submit Application')}</h3>
                                <p>{t('vat.step3_desc', "File VAT registration through IRD's e-portal (ird.gov.np) or visit your nearest Tax Office.")}</p>
                            </div>
                            <div className="slab-table-card">
                                <h3>{t('vat.step4_title', '4. Receive Certificate')}</h3>
                                <p>{t('vat.step4_desc', 'After verification, IRD will issue your VAT registration certificate. Display it at your business premises.')}</p>
                            </div>
                        </div>

                        <div className="reg-note" style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid var(--accent-teal)' }}>
                            <i className="fas fa-link" style={{ color: 'var(--accent-teal)', marginRight: '0.5rem' }}></i>
                            <p style={{ display: 'inline', fontSize: '14px', fontWeight: 600 }}>
                                <span>{t('vat.official_portal', 'Official IRD Portal:')}</span>{' '}
                                <a href="https://ird.gov.np" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)' }}>ird.gov.np</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION: VAT Calculator */}
                <div className="tax-form-section">
                    <h2 className="calculator-title" style={{ marginBottom: '1.5rem' }}>{t('vat.vat_calculator', 'VAT Calculator')}</h2>
                    <div className="tax-page">
                        <div className="tax-card">
                            <div id="tab-calculator" className="tab-content active">
                                <div className="calc-layout">
                                    <div className="calc-panel input-panel">
                                        <h2 className="panel-title">
                                            <i className="fas fa-tags"></i>
                                            <span>{t('vat.price_details', 'Price Details')}</span>
                                        </h2>
                                        <div className="form-group">
                                            <label>{t('vat.calculation_type', 'Calculation Type')}</label>
                                            <div className="radio-group">
                                                <label className={`radio-card ${vatMode === 'add' ? 'active' : ''}`}>
                                                    <input type="radio" name="vat_mode" value="add" checked={vatMode === 'add'} onChange={(e) => setVatMode(e.target.value)} />
                                                    <i className="fas fa-plus"></i>
                                                    <span>{t('vat.add_vat', 'Add VAT to Price')}</span>
                                                </label>
                                                <label className={`radio-card ${vatMode === 'extract' ? 'active' : ''}`}>
                                                    <input type="radio" name="vat_mode" value="extract" checked={vatMode === 'extract'} onChange={(e) => setVatMode(e.target.value)} />
                                                    <i className="fas fa-minus"></i>
                                                    <span>{t('vat.extract_vat', 'Extract VAT from Price')}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vat_amount">
                                                {t('vat.amount_excl', 'Amount (Exclusive of VAT) — NPR')}
                                            </label>
                                            <div className="input-wrapper">
                                                <span className="input-prefix">रू.</span>
                                                <input
                                                    type="number"
                                                    id="vat_amount"
                                                    placeholder="0"
                                                    min="0"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>{t('vat.vat_rate', 'VAT Rate')}</label>
                                            <div className="radio-group small">
                                                <label className={`radio-card ${vatRate === 13 ? 'active' : ''}`}>
                                                    <input type="radio" name="vat_rate" value={13} checked={vatRate === 13} onChange={(e) => setVatRate(Number(e.target.value))} />
                                                    <span>१३% (Standard)</span>
                                                </label>
                                                <label className={`radio-card ${vatRate === 0 ? 'active' : ''}`}>
                                                    <input type="radio" name="vat_rate" value={0} checked={vatRate === 0} onChange={(e) => setVatRate(Number(e.target.value))} />
                                                    <span>{t('vat.exempt_0', '0% (Exempt)')}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="calc-btn-container">
                                            <button id="calc-btn" className="calc-btn" onClick={handleCalculate}>
                                                <i className="fas fa-calculator"></i>
                                                <span>{t('vat.calculate_btn', 'Calculate VAT')}</span>
                                            </button>
                                            <button id="reset-btn" className="reset-btn" onClick={handleReset}>
                                                <i className="fas fa-rotate-left"></i>
                                                <span>{t('form.reset', 'Reset')}</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="calc-panel result-panel">
                                        <h2 className="panel-title">
                                            <i className="fas fa-receipt"></i>
                                            <span>{t('vat.breakdown', 'VAT Breakdown')}</span>
                                        </h2>

                                        {!result && (
                                            <div id="result-placeholder" className="result-placeholder">
                                                <p>{t('vat.enter_amount_prompt', 'Enter an amount and click Calculate to see the VAT breakdown.')}</p>
                                            </div>
                                        )}

                                        {result && (
                                            <div id="result-content" className="result-content updated">
                                                <div className="vat-result-grid">
                                                    <div className="vat-row">
                                                        <span>{t('vat.base_amount_excl', 'Base Amount (excl. VAT)')}</span>
                                                        <span id="res-base">रू. {result.baseAmount.toFixed(2)}</span>
                                                    </div>
                                                    <div className="vat-row accent">
                                                        <span>{t('vat.vat_amount_label', 'VAT Amount')} ({vatRate}%)</span>
                                                        <span id="res-vat">रू. {result.vatAmount.toFixed(2)}</span>
                                                    </div>
                                                    <div className="vat-row total">
                                                        <span>{t('vat.total_incl', 'Total (incl. VAT)')}</span>
                                                        <span id="res-total">रू. {result.totalAmount.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="vat-visual">
                                                    <div className="bar-label">{t('vat.vat_proportion', 'VAT Proportion')}</div>
                                                    <div className="proportion-bar">
                                                        <div className="bar-base" id="bar-base" style={{ width: baseWidth }}></div>
                                                        <div className="bar-vat" id="bar-vat" style={{ width: vatWidth }}></div>
                                                    </div>
                                                    <div className="bar-legend">
                                                        <span><span className="dot base"></span>
                                                            <span>{t('vat.base_price', 'Base Price')}</span>
                                                        </span>
                                                        <span><span className="dot vat"></span>
                                                            <span>{t('vat.vat', 'VAT')}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="disclaimer">
                                                    {t('vat.disclaimer', 'Standard VAT rate in Nepal is 13%. Certain goods and services like agriculture, education, health services etc. are not subject to VAT.')}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vat;
