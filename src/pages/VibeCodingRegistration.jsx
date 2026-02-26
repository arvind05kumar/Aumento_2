import React, { useState } from 'react';

export default function VibeCodingRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        githubUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("VibeCoding Form Submitted:", formData);
        alert("Registration Successful for VibeCoding!");
    };

    return (
        <section style={{
            minHeight: '100vh',
            padding: '8rem 2rem 4rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="glass" style={{
                background: 'rgba(0, 5, 20, 0.65)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 255, 255, 0.2)',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)',
                padding: '3rem',
                width: '100%',
                maxWidth: '600px'
            }}>
                <h2 className="heading-font text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}>
                    REGISTER NOW
                </h2>
                <h3 style={{ textAlign: 'center', color: '#0ff', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>
                    {"<VIBECODING />"}
                </h3>
                <p style={{ textAlign: 'center', color: '#a0a0a0', marginBottom: '2rem' }}>
                    Join the ultimate programming challenge. Enter your details below.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Name */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#0ff', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>FULL NAME</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(0,255,255,0.3)',
                                padding: '1rem',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={e => e.target.style.borderColor = '#0ff'}
                            onBlur={e => e.target.style.borderColor = 'rgba(0,255,255,0.3)'}
                        />
                    </div>

                    {/* Email */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#0ff', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>EMAIL ADDRESS</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(0,255,255,0.3)',
                                padding: '1rem',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={e => e.target.style.borderColor = '#0ff'}
                            onBlur={e => e.target.style.borderColor = 'rgba(0,255,255,0.3)'}
                        />
                    </div>

                    {/* Phone & College Row */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                            <label style={{ color: '#0ff', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>PHONE NUMBER</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(0,255,255,0.3)',
                                    padding: '1rem',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={e => e.target.style.borderColor = '#0ff'}
                                onBlur={e => e.target.style.borderColor = 'rgba(0,255,255,0.3)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                            <label style={{ color: '#0ff', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>COLLEGE</label>
                            <input
                                type="text"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(0,255,255,0.3)',
                                    padding: '1rem',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={e => e.target.style.borderColor = '#0ff'}
                                onBlur={e => e.target.style.borderColor = 'rgba(0,255,255,0.3)'}
                            />
                        </div>
                    </div>

                    {/* GitHub URL (Specific to VibeCoding) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#0ff', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>GITHUB PROFILE URL (Optional)</label>
                        <input
                            type="url"
                            name="githubUrl"
                            value={formData.githubUrl}
                            onChange={handleChange}
                            style={{
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(0,255,255,0.3)',
                                padding: '1rem',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={e => e.target.style.borderColor = '#0ff'}
                            onBlur={e => e.target.style.borderColor = 'rgba(0,255,255,0.3)'}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={{
                        marginTop: '1rem',
                        background: '#0ff',
                        color: '#000',
                        border: 'none',
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        boxShadow: '0 0 15px rgba(0,255,255,0.4)'
                    }}
                        onMouseEnter={e => {
                            e.target.style.background = '#fff';
                            e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.7)';
                        }}
                        onMouseLeave={e => {
                            e.target.style.background = '#0ff';
                            e.target.style.boxShadow = '0 0 15px rgba(0,255,255,0.4)';
                        }}
                    >
                        SUBMIT FOR VIBECODING
                    </button>

                </form>
            </div>
        </section>
    );
}
