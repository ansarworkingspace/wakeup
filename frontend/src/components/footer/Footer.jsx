import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaComment } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerMain'>
      <div className='footerContent'>
        <h3>Wakeup Community</h3>
        <p>Step out of your comfort zone and speak.</p>
        <div className='socialLogo'>
          <FaInstagram className='socialIcon' />
          <FaWhatsapp className='socialIcon' />
          <FaLinkedin className='socialIcon' />
          <FaComment className='socialIcon' />
        </div>
      </div>
    </div>
  );
};

export default Footer;

