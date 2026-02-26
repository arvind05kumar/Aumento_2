import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventsPage from './pages/EventsPage';
import RegistrationPage from './pages/RegistrationPage';
import VibeCodingRegistration from './pages/VibeCodingRegistration';
import FreeFireRegistration from './pages/FreeFireRegistration';
import { Routes, Route, useLocation } from 'react-router-dom';
import bgVideo from './assets/bg_video.mp4';
import Footer from './components/Footer';

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
      {/* Video Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none', backgroundColor: '#000' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35, // Significantly lowered to make text visible and readable
            transform: 'translateZ(0)', // Force hardware acceleration to fix stutter/lag
            willChange: 'transform' // Hint to browser for smoother video playback
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>


      {/* Content overlays */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
        <Footer />
      </div>
    </div>
  )
}

export default App;
