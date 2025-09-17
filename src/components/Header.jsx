import React from 'react';
import './../Header.css';
import logo from '../assets/logo.png'; // Logonuzu buraya import ettik

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Bodur Nakliyat Logo" className="logo-img" />
          BODUR NAKLİYAT
        </a>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#hakkimizda">Hakkımızda</a></li>
          <li><a href="#hizmetler">Hizmetler</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;