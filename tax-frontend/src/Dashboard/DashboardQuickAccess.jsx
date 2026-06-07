import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DashboardQuickAccess = () => {
    const { t } = useTranslation();

    const stats = [
        {
            icon: <i className="fas fa-calculator"></i>,
            title: "tax_calculator.income_tax_calculator",
            description: "guideliness.compute_tax",
            link: "tax_calculator.calculate_now",
            path: "/income-tax",
        },
        {
            icon: "🏢",
            title: "tax_calculator.corporate_tax_calculator",
            description: "guideliness.corporate_tax_calculation",
            link: "tax_calculator.calculate_now",
            path: "/corporate-tax",
        },
        {
            icon: "𝍑",
            title: "resources.vat_calculator",
            description: "vat.vat_detail",
            link: "tax_calculator.calculate_now",
            path: "/vat",
        },
        {
            icon: "🫪",
            title: "resources.Withholding_tax",
            description: "vat.calculate_tds",
            link: "tax_calculator.calculate_now",
            path: "/tds-calculation",
        },
    ];

    return (
        <section id="quick-access-section" className="quick-access">
            <div className="cards-container">
                {stats.map((stat, index) => (
                    <div className="card" key={index}>
                        <div className="card-icon">{stat.icon}</div>
                        <h3>{t(stat.title)}</h3>
                        <p>{t(stat.description)}</p>
                        <Link to={stat.path} className="card-link">
                            {t(stat.link)} →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DashboardQuickAccess;