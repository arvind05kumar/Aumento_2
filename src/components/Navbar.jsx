import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();


    return (
        <nav className="navbar-container" style={{
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
            <div className="navbar-logo-area" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/logo.png" alt="Aumento Logo" className="navbar-logo-img" style={{ width: '65px', height: 'auto', mixBlendMode: 'screen' }} />
                <h1 className="heading-font navbar-title" style={{ fontSize: '1.5rem', margin: 0 }}>
                    AUMENTO 2.0
                </h1>

                {/* Separator line */}
                <div className="navbar-separator" style={{ width: '1px', height: '35px', background: 'rgba(0, 255, 255, 0.3)', margin: '0 0.5rem' }}></div>

                {/* CCT Logo */}
                <div className="navbar-cct-logo" style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)' }}>
                    <img src="/cct-logo.jpg" alt="CCT Logo" style={{ height: '35px', width: 'auto', objectFit: 'contain' }} />
                </div>
            </div>

            <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <Link to="/" style={{ color: location.pathname === '/' ? '#0ff' : '#fff', textDecoration: 'none', borderBottom: location.pathname === '/' ? '2px solid #0ff' : '2px solid transparent', paddingBottom: '4px', transition: 'all 0.3s' }}>HOME</Link>
                <Link to="/events" style={{ color: location.pathname === '/events' ? '#0ff' : '#fff', textDecoration: 'none', borderBottom: location.pathname === '/events' ? '2px solid #0ff' : '2px solid transparent', paddingBottom: '4px', transition: 'all 0.3s' }}>Events</Link>
            </div>

        </nav>
    )
}
