import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Workshops from '../components/Workshops';
import AumentoPast from '../components/AumentoPast';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <AumentoPast />
            <Workshops />
            {/* Creating artificial scroll height to show animation */}
            <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="heading-font text-gradient" style={{ fontSize: '2rem' }}>TO BE CONTINUED...</h2>
            </div>
        </>
    );
}
