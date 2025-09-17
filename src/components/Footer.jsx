import React from 'react';
import './../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Faydalı Bağlantılar</h4>
          <ul>
            <li><a href="#">Gizlilik Politikası</a></li>
            <li><a href="#">Kullanım Koşulları</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Bizi Takip Edin</h4>
          <a href="https://www.instagram.com/bodur.nakliyat/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
            <span>bodur.nakliyat</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565430203984" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
            <span>Bodur Nakliyat</span>
          </a>
        </div>
        <div className="contact-numbers">
          <h4>Bize Ulaşın</h4>
          <a href="tel:+905438718918"><i className="fa-solid fa-phone"></i>+90 543 871 89 18</a>
          <a href="tel:+905314605852"><i className="fa-solid fa-phone"></i>+90 531 460 58 52</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Nakliye Şirketi. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;