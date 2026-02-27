import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Simple scroll animation for the About section
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                x: 50,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about-container" ref={sectionRef} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '5rem 10%',
            zIndex: 10,
            overflow: 'hidden'
        }}>
            <div className="about-content" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {/* Left Content */}
                <div className="about-text" ref={contentRef} style={{ flex: '1 1 400px' }}>
                    <h2 className="heading-font" style={{
                        fontSize: '3.5rem',
                        color: '#0ff',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2
                    }}>
                        What is Aumento?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#ccc',
                        lineHeight: '1.8',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-main)'
                    }}>
                        Aumento 2.0 is the premier technology and innovation festival hosted by the Chandigarh College of Technology. It is designed to bridge the gap between imagination and reality, bringing together the sharpest minds from across the country.
                    </p>
                </div>

                {/* Right Image */}
                <div className="about-image-wrapper" ref={imageRef} style={{
                    flex: '0 1 300px', // Reduced basis to make it smaller
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 auto'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '-15px',
                        right: '15px',
                        bottom: '15px',
                        border: '2px solid #097a80',
                        zIndex: 0,
                        borderRadius: '12px'
                    }}></div>
                    <img
                        src="/Aumento 1.jpeg"
                        alt="Aumento 1.0 Memories"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            boxShadow: '0 10px 30px rgba(0,255,255,0.15)',
                            position: 'relative',
                            zIndex: 1
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
