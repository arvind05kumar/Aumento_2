import React from 'react';
import Hero from '../components/Hero';
import Workshops from '../components/Workshops';

export default function Home() {
    return (
        <>
            <Hero />
            <Workshops />
            {/* Creating artificial scroll height to show animation */}
            <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="heading-font text-gradient" style={{ fontSize: '2rem' }}>TO BE CONTINUED...</h2>
            </div>
        </>
    );
}
