import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/components/navbar.css';
import nepaliGif from '../../assets/images/nepali.gif';
import nepaliGifNe from '../../assets/images/नेपाली.gif';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ne' ? 'en' : 'ne');
    };

    return (
        <header>
            <div className="header-container">
                <Link to="/" className="logo" id="logoLink">
                    <div className="logo-wrapper">
                        {i18n.language === 'ne' ? (
                            <img src={nepaliGifNe} alt="नेपाल कर जानकारी" id="logoImageNe" className="brand-logo" />
                        ) : (
                            <img src={nepaliGif} alt="Nepal Tax Info" id="logoImageEn" className="brand-logo" />
                        )}
                        <div className="logo-text">
                            <h1>{t('contact.nepal_tax_info', 'नेपाल कर जानकारी')}</h1>
                            <p>{t('contact.tax_info_subtitle', 'कर जानकारी र क्यालकुलेटर')}</p>
                        </div>
                    </div>
                </Link>
                <nav>
                    <a href="/#quick-access-section" id="nav-calculator">{t('tax_calculator.calculators', 'Calculators')}</a>
                    <a href="/#resources">{t('resources.law', 'Tax Law')}</a>
                    <Link to="/contact" id="nav-contact">{t('contact.contact', 'Contact')}</Link>
                    <Link to="/login" className="nav-auth-start">{t('form.login', 'Login')}</Link>
                </nav>
                <div className="header-actions">
                    <div className="lang-toggle">
                        {/* Implementing the toggle matching Django instructions */}
                        {i18n.language === 'en' ? (
                            <button className="lang-btn active" onClick={() => i18n.changeLanguage('ne')}>नेपाली</button>
                        ) : (
                            <button className="lang-btn active" onClick={() => i18n.changeLanguage('en')}>EN</button>
                        )}
                    </div>
                    <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;