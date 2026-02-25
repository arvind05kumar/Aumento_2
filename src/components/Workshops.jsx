import React from 'react';
import { Link } from 'react-router-dom';

export default function Workshops() {
    const cards = [
        { title: "VibeCoding", cat: "Programming Challenge", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop" },
        { title: "Gamming Tournament", cat: "Free Fire", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
        { title: "Tech Bingo", cat: "Trivia", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
    ];

    return (
        <section style={{
            minHeight: '100vh',
            padding: '8rem 4rem',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="heading-font text-gradient" style={{ fontSize: '3rem', marginBottom: '4rem' }}>FEATURED EVENTS</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="glass"
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                position: 'relative',
                                transition: 'transform 0.4s ease, border-color 0.4s',
                                cursor: 'pointer',
                                border: '1px solid rgba(0,255,255,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = '#00ffff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.1)';
                            }}
                        >
                            <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
                                    zIndex: 1
                                }} />
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 2 }}>
                                <h3 className="heading-font" style={{ fontSize: '2rem', margin: 0, color: '#fff' }}>
                                    {card.title}
                                </h3>
                                <p style={{ color: '#0ff', marginTop: '0.5rem', letterSpacing: '1px' }}>
                                    {card.cat.toUpperCase()} //
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                    <Link to="/events" style={{ textDecoration: 'none' }}>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid rgba(0,255,255,0.5)',
                            color: '#0ff',
                            padding: '1rem 3rem',
                            fontFamily: 'var(--font-display)',
                            cursor: 'pointer',
                            letterSpacing: '2px',
                            transition: 'all 0.3s',
                        }}
                            onMouseEnter={e => {
                                e.target.style.background = 'rgba(0,255,255,0.1)';
                                e.target.style.boxShadow = '0 0 15px rgba(0,255,255,0.3)';
                            }}
                            onMouseLeave={e => {
                                e.target.style.background = 'transparent';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            EXPLORE ALL EVENTS
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
