import React, { useState } from 'react';

export default function FreeFireRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        leaderInGameName: '',
        teamName: '',
        email: '',
        phone: '',
        college: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Replace this URL with your actual Google Apps Script Web App URL
        const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

        if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            alert("Please add your Google Script URL in the code! Check the conversation instructions.");
            setIsSubmitting(false);
            return;
        }

        try {
            const formBody = new FormData();
            formBody.append('teamName', formData.teamName);
            formBody.append('name', formData.name);
            formBody.append('leaderInGameName', formData.leaderInGameName);
            formBody.append('email', formData.email);
            formBody.append('phone', formData.phone);
            formBody.append('college', formData.college);

            // mode: 'no-cors' is required to bypass CORS blocking from Google Scripts on frontend
            await fetch(scriptURL, {
                method: 'POST',
                body: formBody,
                mode: 'no-cors'
            });

            alert("Registration Successful for Gamming Tournament - Free Fire!");
            setFormData({
                name: '',
                leaderInGameName: '',
                teamName: '',
                email: '',
                phone: '',
                college: ''
            });
        } catch (error) {
            console.error('Error!', error.message);
            alert("Oops! Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                border: '1px solid rgba(255, 152, 0, 0.3)',
                boxShadow: '0 0 30px rgba(255, 152, 0, 0.15)',
                padding: '3rem',
                width: '100%',
                maxWidth: '600px'
            }}>
                <h2 className="heading-font text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(255, 152, 0, 0.5)' }}>
                    REGISTER NOW
                </h2>
                <h3 style={{ textAlign: 'center', color: '#ff9800', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>
                    GAMMING TOURNAMENT: FREE FIRE
                </h3>
                <p style={{ textAlign: 'center', color: '#a0a0a0', marginBottom: '2rem' }}>
                    Assemble your squad and battle for glory.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Team Name */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#ff9800', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>SQUAD / TEAM NAME</label>
                        <input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                            style={{
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,152,0,0.3)',
                                padding: '1rem',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={e => e.target.style.borderColor = '#ff9800'}
                            onBlur={e => e.target.style.borderColor = 'rgba(255,152,0,0.3)'}
                        />
                    </div>

                    {/* Team Leader Name vs IGN */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                            <label style={{ color: '#ff9800', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>LEADER FULL NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,152,0,0.3)',
                                    padding: '1rem',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={e => e.target.style.borderColor = '#ff9800'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,152,0,0.3)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                            <label style={{ color: '#ff9800', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>LEADER IN-GAME NAME</label>
                            <input
                                type="text"
                                name="leaderInGameName"
                                value={formData.leaderInGameName}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,152,0,0.3)',
                                    padding: '1rem',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={e => e.target.style.borderColor = '#ff9800'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,152,0,0.3)'}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#ff9800', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>EMAIL ADDRESS</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                background: 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,152,0,0.3)',
                                padding: '1rem',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={e => e.target.style.borderColor = '#ff9800'}
                            onBlur={e => e.target.style.borderColor = 'rgba(255,152,0,0.3)'}
                        />
                    </div>

                    {/* Phone & College Row */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                            <label style={{ color: '#ff9800', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>PHONE NUMBER</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,152,0,0.3)',
                                    padding: '1rem',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={e => e.target.style.borderColor = '#ff9800'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,152,0,0.3)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                            <label style={{ color: '#ff9800', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontSize: '0.9rem' }}>COLLEGE</label>
                            <input
                                type="text"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,152,0,0.3)',
                                    padding: '1rem',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={e => e.target.style.borderColor = '#ff9800'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,152,0,0.3)'}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={isSubmitting} style={{
                        marginTop: '1rem',
                        background: isSubmitting ? '#555' : '#ff9800',
                        color: isSubmitting ? '#ccc' : '#000',
                        border: 'none',
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 'bold',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        boxShadow: isSubmitting ? 'none' : '0 0 15px rgba(255,152,0,0.4)'
                    }}
                        onMouseEnter={e => {
                            if (!isSubmitting) {
                                e.target.style.background = '#fff';
                                e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.7)';
                            }
                        }}
                        onMouseLeave={e => {
                            if (!isSubmitting) {
                                e.target.style.background = '#ff9800';
                                e.target.style.boxShadow = '0 0 15px rgba(255,152,0,0.4)';
                            }
                        }}
                    >
                        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT FOR FREE FIRE'}
                    </button>

                </form>
            </div>
        </section>
    );
}
