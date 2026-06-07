import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const DashboardTop = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{t('guideliness.nepal_tax_structure', 'नेपालको कर संरचना जान्नुहोस्')}</h1>
                <div style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.9 }}>
                    {t('guideliness.nepal_tax_law', 'नेपालको कर कानूनमा आधारित जानकारीमूलक प्लेटफर्म।')}
                </div>
                <button 
                    id="calc-tax-btn" 
                    className="cal-button" 
                    onClick={() => {
                        const el = document.getElementById('quick-access-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    {t('tax_calculator.calculate_tax', 'कर गणना गर्नुहोस्')}
                </button>
                <button className="cal-button secondary">
                    {t('guideliness.view_tax_guide', 'कर गाइड हेर्नुहोस्')}
                </button>
            </div>
        </section>
    );
};

export default DashboardTop;