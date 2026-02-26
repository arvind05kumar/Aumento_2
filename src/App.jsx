import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventsPage from './pages/EventsPage';
import RegistrationPage from './pages/RegistrationPage';
import VibeCodingRegistration from './pages/VibeCodingRegistration';
import FreeFireRegistration from './pages/FreeFireRegistration';
import { Routes, Route, useLocation } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const progressRef = useRef({ value: 0 });
  const location = useLocation();

  useEffect(() => {
    // Refresh ScrollTrigger when location (route) changes so it recalculates page height
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#root-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        // Map scroll to progress value (0 to 1)
        progressRef.current.value = self.progress;
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }, []);

  return (
    <div id="root-container" style={{ position: 'relative', width: '100vw', overflowX: 'hidden' }}>
      {/* 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <ParticleBackground progressRef={progressRef} />
      </div>


      {/* Content overlays */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/register/vibecoding" element={<VibeCodingRegistration />} />
            <Route path="/register/freefire" element={<FreeFireRegistration />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;
