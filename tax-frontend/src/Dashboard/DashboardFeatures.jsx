import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardFeatures = () => {
    const { t } = useTranslation();

    const tabs = [
        {
            icon: <i className="fas fa-bolt"></i>,
            title: "guideliness.instant_res",
            description: "guideliness.guide",
        },
        {
            icon: <i className="fas fa-globe"></i>,
            title: "guideliness.bilingual",
            description: "guideliness.service",
        },
        {
            icon: <i className="fas fa-mobile-screen-button"></i>,
            title: "guideliness.mobile_friendly",
            description: "guideliness.device",
        },
        {
            icon: <i className="fas fa-lock"></i>,
            title: "guideliness.secure",
            description: "guideliness.data",
        },
    ];

    return (
        <section className="features">
            <div className="features-container">
                <h2 className="section-title">{t('guideliness.why_this_site', 'Why Choose Us?')}</h2>
                <p className="section-subtitle">{t('guideliness.tax_compliance_info', 'Everything you need for tax compliance')}</p>

                <div className="features-grid">
                    {tabs.map((tab, index) => (
                        <div className="feature" key={index}>
                            <div className="feature-icon">{tab.icon}</div>
                            <h3>{t(tab.title)}</h3>
                            <p>{t(tab.description)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DashboardFeatures;