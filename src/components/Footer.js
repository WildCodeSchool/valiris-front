import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_valiris.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className='nav-footer'>
          <li><NavLink to='/legal-notice' className='footer-link-item'>Mentions Légales</NavLink></li>
          <li><NavLink to='/CGU' className='footer-link-item'>Conditions Générales d'Utilisation</NavLink></li>
        </ul>
      </nav>
      <img src={logo} alt='logo-valiris' className='logo-footer' />
    </footer>
  );
};

export default Footer;
