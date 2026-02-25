import React from 'react';

export default function EventsPage() {
    const technicalEvents = [
        { name: "VibeCoding", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Tech Bingo", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Fix the Pitch", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Brand Autopsy", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "60 - second shark tank", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Project Display", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", link: "#" }
    ];

    const nonTechnicalEvents = [
        { name: "Construmed Photography", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Unfinished Canvas", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Mock AD Crazis", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "String Art", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", link: "#" },
        { name: "Gamming Tournament -Free Fire", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", link: "#" }
    ];

    const renderEventList = (events) => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginTop: '2rem'
        }}>
            {events.map((event, idx) => (
                <div key={idx} className="glass" style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 255, 255, 0.1)',
                    transition: 'transform 0.4s, border-color 0.4s',
                    position: 'relative',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '400px',
                }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.4)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.1)';
                    }}
                >
                    {/* Image Section */}
                    <div style={{ height: '220px', width: '100%', position: 'relative', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', overflow: 'hidden' }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
                            zIndex: 1
                        }} />
                        <img
                            src={event.img}
                            alt={event.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Content Section */}
                    <div style={{ padding: '2rem', flex: 1, position: 'relative', zIndex: 2 }}>
                        <div style={{ color: '#0ff', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>EVENT {String(idx + 1).padStart(2, '0')}</div>
                        <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>{event.name}</h3>
                    </div>

                    {/* Tile Register Button */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-1.5rem',
                        right: '-1.5rem',
                        zIndex: 10,
                        filter: 'drop-shadow(0 5px 15px rgba(0,255,255,0.4))',
                        transition: 'filter 0.3s ease'
                    }}>
                        <a href={event.link} style={{ textDecoration: 'none' }}>
                            <button style={{
                                backgroundColor: '#0ff',
                                color: '#000',
                                border: 'none',
                                padding: '1rem 3rem',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                                display: 'block'
                            }}
                                onMouseEnter={e => {
                                    e.target.style.backgroundColor = '#fff';
                                    e.target.parentElement.parentElement.style.filter = 'drop-shadow(0 5px 25px rgba(255,255,255,0.7))';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.backgroundColor = '#0ff';
                                    e.target.parentElement.parentElement.style.filter = 'drop-shadow(0 5px 15px rgba(0,255,255,0.4))';
                                }}
                            >
                                REGISTER NOW
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section style={{
            minHeight: '100vh',
            padding: '8rem 4rem 4rem 4rem',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 className="heading-font text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>ALL EVENTS</h1>
                <p style={{ color: '#a0a0a0', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px' }}>
                    Explore our expansive list of technical and non-technical challenges designed to push the boundaries of innovation and creativity.
                </p>

                <h2 className="heading-font" style={{ fontSize: '2.5rem', color: '#ff9800', marginTop: '4rem', borderBottom: '1px solid rgba(255, 152, 0, 0.3)', paddingBottom: '1rem' }}>
                    TECHNICAL EVENTS
                </h2>
                {renderEventList(technicalEvents)}

                <h2 className="heading-font" style={{ fontSize: '2.5rem', color: '#ff9800', marginTop: '6rem', borderBottom: '1px solid rgba(255, 152, 0, 0.3)', paddingBottom: '1rem' }}>
                    NON-TECHNICAL EVENTS
                </h2>
                {renderEventList(nonTechnicalEvents)}
            </div>

        </section>
    );
}
