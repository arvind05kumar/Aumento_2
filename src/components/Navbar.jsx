import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();


    return (
        <nav style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 3rem',
            zIndex: 100,
            background: 'rgba(0, 5, 20, 0.65)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/logo.png" alt="Aumento Logo" style={{ width: '65px', height: 'auto', mixBlendMode: 'screen' }} />
                <h1 className="heading-font" style={{ fontSize: '1.5rem', margin: 0 }}>
                    AUMENTO 2.0
                </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <Link to="/" style={{ color: location.pathname === '/' ? '#0ff' : '#fff', textDecoration: 'none', borderBottom: location.pathname === '/' ? '2px solid #0ff' : '2px solid transparent', paddingBottom: '4px', transition: 'all 0.3s' }}>HOME</Link>
                <Link to="/events" style={{ color: location.pathname === '/events' ? '#0ff' : '#fff', textDecoration: 'none', borderBottom: location.pathname === '/events' ? '2px solid #0ff' : '2px solid transparent', paddingBottom: '4px', transition: 'all 0.3s' }}>Events</Link>
                <Link to="/gallery" style={{ color: location.pathname === '/gallery' ? '#0ff' : '#fff', textDecoration: 'none', borderBottom: location.pathname === '/gallery' ? '2px solid #0ff' : '2px solid transparent', paddingBottom: '4px', transition: 'all 0.3s' }}>Gallery</Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <button style={{
                    background: 'transparent',
                    border: '1px solid #0ff',
                    color: '#0ff',
                    padding: '0.6rem 2rem',
                    fontFamily: 'var(--font-display)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                }}
                    onMouseEnter={e => {
                        e.target.style.background = '#0ff';
                        e.target.style.color = '#000';
                    }}
                    onMouseLeave={e => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#0ff';
                    }}
                >
                    LOGIN
                </button>
            </div>
        </nav>
    )
}
