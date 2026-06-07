import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/home.css';

const Contact = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // TODO: connect to API
        console.log({ name, email, message });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact-section" className="contact-section" style={{ padding: '4rem 2rem', background: '#f9f9f9', minHeight: 'calc(100vh - 200px)' }}>
            <div className="contact-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    {t('contact.contact_us')}
                </h2>
                <div className="contact-content" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className="team-info" style={{ flex: '1', minWidth: '300px', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>{t('contact.our_team')}</h3>
                        <p style={{ marginBottom: '1rem' }}>{t('contact.developer')}</p>
                        <p style={{ marginBottom: '1rem' }}><strong>{t('contact.team_name')}</strong></p>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>{t('contact.team1')}</strong> - <a href="https://github.com/Aiswarya-Pokharel" target="_blank" rel="noreferrer">{t('contact.github')}</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>{t('contact.team2')}</strong> - <a href="https://github.com/Anujakhatri" target="_blank" rel="noreferrer">{t('contact.github')}</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>{t('contact.team3')}</strong> - <a href="https://github.com/anuskabhandari" target="_blank" rel="noreferrer">{t('contact.github')}</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <strong>{t('contact.team4')}</strong> - <a href="https://github.com/AsmitaTimalsena" target="_blank" rel="noreferrer">{t('contact.github')}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-container" style={{ flex: '1', minWidth: '300px', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>{t('contact.get_in_touch')}</h3>
                        <form id="contactForm" onSubmit={handleContactSubmit}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="contactName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    {t('form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="contactName"
                                    required
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="contactEmail" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    {t('form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    required
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="contactMessage" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    {t('form.msg')}
                                </label>
                                <textarea
                                    id="contactMessage"
                                    required
                                    rows="4"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#007bff', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'all 0.3s ease' }}
                                onMouseOver={(e) => { e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }}
                                onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                            >
                                {t('form.send_msg')}
                            </button>
                            {showSuccess && (
                                <p id="contactSuccess" style={{ color: 'green', marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
                                    {t('form.msg_sent')}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
