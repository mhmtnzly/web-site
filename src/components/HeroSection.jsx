
import React from 'react';
import './../HeroSection.css';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp ikonunu import ettik


const HeroSection = () => {
  const whatsappNumber = "905438718918";
  const whatsappMessage = "Merhaba, taşımacılık hizmetleriniz hakkında bilgi almak istiyorum.";

  return (

    <section className="hero-section">
      <div className="hero-content">
        <h1>Güvenli ve Hızlı Nakliyat Hizmetleri</h1>
        <p>Eşyalarınızı en güvenli şekilde taşıyoruz.</p>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
          className="cta-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span>WhatsApp'tan Teklif Al</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;