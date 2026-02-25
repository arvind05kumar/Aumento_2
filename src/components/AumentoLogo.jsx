import React from 'react';

export default function AumentoLogo({ width = 45, height = 45 }) {
    return (
        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="neon-glow-logo" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <path
                d="M 33 85 
           L 50 20 
           L 63 60 
           C 70 80, 65 95, 50 95 
           C 25 95, 5 75, 5 50 
           C 5 25, 25 5, 50 5 
           C 75 5, 95 25, 95 50 
           C 95 75, 80 65, 33 65"
                stroke="#00ffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                filter="url(#neon-glow-logo)"
            />
        </svg>
    );
}
