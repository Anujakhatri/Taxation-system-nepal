import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../../styles/components/footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>{t('tax_calculator.calculators', 'Calculators')}</h4>
                        <Link to="/income-tax">{t('tax_calculator.income_tax', 'Income Tax')}</Link>
                        <Link to="/corporate-tax">{t('tax_calculator.corporate_tax', 'Corporate Tax')}</Link>
                        <Link to="/vat">{t('resources.vat_calculator', 'VAT Calculator')}</Link>
                        <Link to="/tds-calculation">{t('resources.Withholding_tax', 'Withholding Tax')}</Link>
                    </div>
                    <div className="footer-section">
                        <h4>{t('resources.resources', 'Resources')}</h4>
                        <Link to="#">{t('resources.tax_guideliness', 'Tax Guides')}</Link>
                        <Link to="#">{t('resources.deductions', 'Deductions')}</Link>
                        <Link to="#">{t('resources.FAQs', 'FAQs')}</Link>
                        <Link to="#">{t('resources.glossary', 'Glossary')}</Link>
                    </div>
                    <div className="footer-section">
                        <h4>{t('resources.legal', 'Legal')}</h4>
                        <Link to="#">{t('resources.privacy_policy', 'Privacy Policy')}</Link>
                        <Link to="#">{t('resources.terms_of_use', 'Terms of Use')}</Link>
                        <Link to="#">{t('resources.disclaimer', 'Disclaimer')}</Link>
                    </div>
                    <div className="footer-section">
                        <h4>{t('resources.government_links', 'Government Links')}</h4>
                        <a href="https://ird.gov.np/" target="_blank" rel="noopener noreferrer">{t('resources.inland_revenue_department', 'Inland Revenue Department')}</a>
                        <a href="https://mof.gov.np/" target="_blank" rel="noopener noreferrer">{t('resources.finance_office', 'Ministry of Finance')}</a>
                        <a href="https://en.ican.org.np/_browsable/file/career/8Income-Tax-Act-2058.pdf" target="_blank" rel="noopener noreferrer">{t('resources.nepal_act_tax', 'Nepal Tax Act')}</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        <span>{t('resources.tax_info_2025', '© 2025 Nepal Tax Information. Not affiliated with IRD.')}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;