import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/home.css';
import '../styles/shared_tax.css';

const Login = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: connect to backend auth
        console.log({ email, password, mode: showRegister ? 'register' : 'login' });
    };

    return (
        <section className="contact-section" style={{ padding: '4rem 2rem', background: '#f9f9f9', minHeight: 'calc(100vh - 200px)' }}>
            <div className="contact-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {showRegister ? t('form.register', 'Register') : t('form.login', 'Login')}
                </h2>

                <div className="contact-form-container" style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="loginEmail" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                {t('form.email', 'Email')}
                            </label>
                            <input
                                type="email"
                                id="loginEmail"
                                required
                                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="loginPassword" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                {t('form.password', 'Password')}
                            </label>
                            <input
                                type="password"
                                id="loginPassword"
                                required
                                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#007bff', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'all 0.3s ease' }}
                            onMouseOver={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }}
                            onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                        >
                            {showRegister ? t('form.register', 'Register') : t('form.login', 'Login')}
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666' }}>
                        {showRegister ? t('form.have_account', 'Already have an account?') : t('form.no_account', "Don't have an account?")}{' '}
                        <button
                            type="button"
                            onClick={() => setShowRegister(!showRegister)}
                            style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline', fontSize: 'inherit' }}
                        >
                            {showRegister ? t('form.login', 'Login') : t('form.register', 'Register')}
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
