import React from 'react';

export default function AumentoPast() {
    const photos = [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470229722913-7c090be5c5eff?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section style={{
            padding: '4rem 0 2rem 0',
            overflow: 'hidden',
        }}>
            <h2 className="heading-font text-gradient aumento-past-title" style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
                AUMENTO 1.0 MEMORIES
            </h2>

            <div className="marquee-container" style={{
                display: 'flex',
                overflow: 'hidden',
                width: '100%',
                position: 'relative'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    animation: 'marquee 30s linear infinite',
                    paddingLeft: '2rem'
                }}>
                    {/* Double the photos for smooth infinite scrolling */}
                    {[...photos, ...photos].map((src, i) => (
                        <div key={i} style={{ flexShrink: 0 }}>
                            <img
                                src={src}
                                alt={`Aumento Memory ${i}`}
                                className="marquee-img"
                                style={{
                                    height: '300px',
                                    width: '450px',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(0, 255, 255, 0.2)',
                                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                                    transition: 'transform 0.4s ease, border-color 0.4s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.borderColor = '#00ffff';
                                    e.currentTarget.parentElement.parentElement.style.animationPlayState = 'paused';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.2)';
                                    e.currentTarget.parentElement.parentElement.style.animationPlayState = 'running';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 1rem));
                    }
                }
            `}</style>
        </section>
    );
}
