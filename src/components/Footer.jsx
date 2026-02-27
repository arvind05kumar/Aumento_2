import React from 'react';
import { FaInstagram, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer style={{
            background: 'rgba(0, 5, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 255, 255, 0.1)',
            padding: '4rem 10% 2rem',
            color: '#a0a0a0',
            fontFamily: 'var(--font-main)',
            marginTop: 'auto'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3rem',
                justifyContent: 'space-between',
                marginBottom: '3rem'
            }}>
                {/* Left: Brand & Contact */}
                <div style={{ flex: '1 1 300px' }}>
                    <h2 className="heading-font" style={{ color: '#0ff', fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px' }}>AUMENTO 2.0</h2>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Chandigarh College of Technology</h3>
                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Landran, Sector 112,<br />Greater Mohali, Punjab 140307, India</p>
                    <p style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaEnvelope style={{ color: '#0ff' }} />
                            <span><strong style={{ color: '#0ff' }}>Email:</strong> info@cctmohali.org</span>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaPhone style={{ color: '#0ff' }} />
                            <span><strong style={{ color: '#0ff' }}>Phone:</strong> +91 1800 200 3575</span>
                        </span>
                    </p>

                    {/* Socials */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="https://www.instagram.com/cct_cgclandran/" target="_blank" rel="noreferrer" style={{
                            color: '#0ff',
                            textDecoration: 'none',
                            padding: '0.5rem 1rem',
                            border: '1px solid rgba(0, 255, 255, 0.3)',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,255,0.1)'; e.currentTarget.style.borderColor = '#0ff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'; }}
                        >
                            <FaInstagram size={18} /> Instagram
                        </a>
                        <a href="https://www.cctmohali.org" target="_blank" rel="noreferrer" style={{
                            color: '#0ff',
                            textDecoration: 'none',
                            padding: '0.5rem 1rem',
                            border: '1px solid rgba(0, 255, 255, 0.3)',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,255,0.1)'; e.currentTarget.style.borderColor = '#0ff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'; }}
                        >
                            <FaGlobe size={18} /> Website
                        </a>
                    </div>
                </div>

                {/* Right: Map */}
                <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Find Us Here</h3>
                    <div style={{
                        flex: '1',
                        width: '100%',
                        minHeight: '250px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 255, 255, 0.2)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.2274198943924!2d76.65725287611593!3d30.65568198939632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe404414ecef5%3A0xcfabcbbb7c25bd16!2sChandigarh%20Group%20of%20Colleges%20(CGC)%20-%20Landran!5e0!3m2!1sen!2sin!4v1709425575553!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '250px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '2rem',
                textAlign: 'center',
                fontSize: '0.8rem',
                opacity: 0.7
            }}>
                <p style={{ margin: 0 }}>
                    &copy; {new Date().getFullYear()} Acrobite Technologies. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
