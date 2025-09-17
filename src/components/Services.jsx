import React from 'react';
import './../Services.css';
import { FaTruckMoving, FaCity } from 'react-icons/fa'; // İkonları import ettik

const Services = () => {
  return (
    <section id="hizmetler" className="services-section">
      <h2>Hizmetlerimiz</h2>
      <div className="services-grid">
        <div className="service-card">
          <FaCity className="service-icon" /> {/* Şehir içi taşımacılık ikonu */}
          <h3>Şehir İçi Taşımacılık</h3>
          <p>İstanbul'un her noktasına güvenli ve hızlı şehir içi taşımacılık hizmeti sağlıyoruz.</p>
        </div>
        <div className="service-card">
          <FaTruckMoving className="service-icon" /> {/* Şehirler arası taşımacılık ikonu */}
          <h3>Şehirler Arası Taşımacılık</h3>
          <p>Türkiye'nin tüm şehirlerine profesyonel ve sigortalı şehirler arası nakliyat hizmeti sunuyoruz.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;