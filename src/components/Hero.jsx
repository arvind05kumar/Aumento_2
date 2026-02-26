import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Hero() {
    const titleRef = useRef(null);

    useEffect(() => {
        // Simple glitch or fade-in animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power4.out" }
        );
    }, []);

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div
                ref={titleRef}
                style={{
                    maxWidth: '800px',
                    textAlign: 'center',
                    zIndex: 10,
                }}
            >
                <div style={{ color: '#aaa', fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-main)' }}>
                    Chandigarh College of Technology presents
                </div>

                <h2 className="heading-font" style={{ fontSize: '5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: '#fff' }}>
                    AUMENTO 2.0<br />

                </h2>
                <div style={{ color: '#0ff', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', letterSpacing: '2px', fontWeight: 'bold' }}>
                    APRIL 04 - 05, 2026
                </div>

                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.5' }}>
                    A celebration of technology, innovation, and ideas brought together by curious minds. Join us as we explore, learn, and build the future.
                </p>
                <div style={{ marginBottom: '3rem' }}>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', margin: '0 auto 1rem', lineHeight: '1.5' }}>
                        Powered by
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/acrobite.png" alt="Acrobite" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                        <div style={{ width: '2px', height: '35px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
                        <img src="/Kollabworks.png" alt="Kollabworks" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <button style={{
                            background: '#097a80', /* Custom Teal matching the image */
                            color: '#fff',
                            border: 'none',
                            padding: '1rem 3rem',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 'bold'
                        }}
                            onMouseEnter={e => {
                                e.target.style.background = '#0ff';
                                e.target.style.color = '#000';
                                e.target.style.boxShadow = '0 0 20px rgba(0,255,255,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.target.style.background = '#097a80';
                                e.target.style.color = '#fff';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            REGISTER
                        </button>
                    </Link>

                    <Link to="/events" style={{ textDecoration: 'none' }}>
                        <button style={{
                            background: 'rgba(0,0,0,0.5)',
                            color: '#fff',
                            border: '1px solid rgba(0,255,255,0.3)',
                            padding: '1rem 3rem',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 'bold'
                        }}
                            onMouseEnter={e => {
                                e.target.style.background = 'rgba(0,255,255,0.1)';
                                e.target.style.borderColor = '#0ff';
                            }}
                            onMouseLeave={e => {
                                e.target.style.background = 'rgba(0,0,0,0.5)';
                                e.target.style.borderColor = 'rgba(0,255,255,0.3)';
                            }}
                        >
                            EXPLORE EVENTS
                        </button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{
                    width: '2px',
                    height: '40px',
                    background: 'linear-gradient(to bottom, #00ffff, transparent)',
                    animation: 'scrollPulse 2s infinite'
                }} />
                <span style={{ fontSize: '0.8rem', color: '#00ffff', letterSpacing: '2px' }}>SCROLL TO EXPLORE</span>
            </div>

            <style>{`
        @keyframes scrollPulse {
            0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
            50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
            50.1% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
            100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
        </section>
    )
}
