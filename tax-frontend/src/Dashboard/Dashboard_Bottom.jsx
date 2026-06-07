import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard_Bottom = () => {
    const { t } = useTranslation();

    return (
        <section className="cal-section">
            <div className="cal-section-content">
                <h2>{t('tax_calculator.rdy_to_calculate', 'Ready to Calculate Your Taxes?')}</h2>
                <p>{t('guideliness.description', 'Start with our income tax calculator or explore our comprehensive tax guides.')}</p>
                <button id="get-started-btn" className="cal-button">
                    {t('guideliness.start_now', 'Get Started Now')}
                </button>
            </div>
        </section>
    );
};

export default Dashboard_Bottom;