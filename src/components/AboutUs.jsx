import React from 'react';
import './../AboutUs.css';

const AboutUs = () => {
  return (
    <section id="hakkimizda" className="about-section">
      <h2>Hakkımızda</h2>
      <p>
        Bodur Nakliyat olarak, İstanbul'da başlayan ve tüm Türkiye'ye yayılan güvenilir taşımacılık hizmetlerimizle sektörde fark yaratıyoruz. Her bir müşterimizin eşyasını kendi eşyamız gibi görerek, en yüksek özen ve profesyonellikle taşıyoruz.
      </p>
      <p>
        Yılların verdiği tecrübeyle, şehir içi ve şehirler arası taşımacılıkta en hızlı ve güvenli çözümleri sunuyoruz. Müşteri memnuniyeti bizim için her zaman önceliktir.
      </p>
      <button className="read-more-btn">Daha Fazlası</button>
    </section>
  );
};

export default AboutUs;