import React from "react";
import "../Gallery.css";


// YENİ (daha sağlam): mutlak /src yolunu kullan + debug log
const modules = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,webp}", { eager: true });
const images = Object.values(modules).map((m) => m.default);
console.log("[gallery] found:", Object.keys(modules)); // geçici kontrol

const Gallery = () => {
  return (
    <section id="galeri" className="gallery-section">
      <h2>Galeri</h2>
      <p>Yaptığımız işlerden görseller.</p>

      <div className="gallery-grid">
        {images.length === 0 && (
          <p style={{ opacity: 0.8 }}>
            (Şimdilik görsel bulunamadı.
            <code>/src/assets/gallery</code> içine fotoğraf ekle.)
          </p>
        )}

        {images.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={src}
              alt={`Nakliyat görseli ${i + 1}`}
              loading="lazy"
              width="200"
              height="200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
