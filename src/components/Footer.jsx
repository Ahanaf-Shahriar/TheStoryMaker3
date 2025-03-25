// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Add styles here

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 The Story Maker. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/thestorymakeronline">Facebook</a>
          <a href="https://www.instagram.com/thestorymakerofficialbd/">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
