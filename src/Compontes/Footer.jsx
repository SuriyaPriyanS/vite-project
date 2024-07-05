// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
  return (
    <footer className="py-3 text-center footer-container sticky-bottom mt-5 text-light">
      <p>&copy; 2024 Suriyapriyan. All rights reserved.</p>
      <div className="d-flex justify-content-center gap-4">
        <a href="https://www.linkedin.com/in/suriya-priyan-ab186721b/" className="text-light">
          <h3><FaLinkedin /></h3>
        </a>
        <a href="https://github.com/SuriyaPriyanS" className="text-light">
          <h3><FaGithub /></h3>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
