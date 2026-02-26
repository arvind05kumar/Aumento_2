import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            background: 'rgba(0, 5, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 255, 255, 0.1)',
            padding: '2rem 1rem',
            textAlign: 'center',
            color: '#aaa',
            fontFamily: 'var(--font-main)',
            marginTop: 'auto'
        }}>
            <h2 className="heading-font" style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>AUMENTO 2.0</h2>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem' }}>
                Chandigarh College of Technology
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} Acrobite Technologies. All rights reserved.
            </p>
        </footer>
    );
}
