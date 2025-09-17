import React from 'react';
import './../Contact.css';

const Contact = () => {
  return (
    <section id="iletisim" className="contact-section">
      <div className="contact-content">
        <h2>Bize Ulaşın</h2>
        <p>Hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.</p>
        <div className="contact-info-form">
          <div className="contact-details">
            <div className="info-item">
              <h4><i className="fa-solid fa-phone"></i> Telefon</h4>
              <a href="tel:+905438718918">+90 543 871 89 18</a>
              <a href="tel:+905314605852">+90 531 460 58 52</a>
            </div>
            <div className="info-item">
              <h4><i className="fa-solid fa-envelope"></i> E-posta</h4>
              <a href="mailto:Bodurnakliyat@hotmail.com">Bodurnakliyat@hotmail.com</a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" placeholder="Adınız Soyadınız" required />
              <input type="email" placeholder="E-posta Adresiniz" required />
              <textarea placeholder="Mesajınız" rows="5" required></textarea>
              <button type="submit" className="form-submit-btn">Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;