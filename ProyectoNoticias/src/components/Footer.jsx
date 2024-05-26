import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Tesla 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

