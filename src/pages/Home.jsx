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
        </>
    );
}
