import React, { useEffect } from 'react';
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import './App.css';

// (İstersen sonra eklemiştik) import BackToTop from "./components/BackToTop.jsx";
// import WhatsAppFab from "./components/WhatsAppFab.jsx";

function App() {
  // ↓↓↓ SCROLL OLUNCA BODY'E "scrolled" CLASSI EKLENİR
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // ↑↑↑

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <Gallery /> {/* Galeriyi hizmetlerin altına ekledik */}
        <Contact />
      </main>
<BackToTop />
<WhatsAppFab />



      <Footer />
    </div>
  );
}

export default App;
