import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_valiris.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <nav className='nav-footer'>
        <ul className='menu-footer'>
          <li><NavLink to='/legal-notice' className='footer-link-item'>Mentions Légales</NavLink></li>
          <li><NavLink to='/CGU' className='footer-link-item'>Conditions Générales d'Utilisation</NavLink></li>
        </ul>
        <div className='logo-footer'>
          <NavLink to='/'><img src={logo} alt='logo-valiris' /></NavLink>
        </div>
      </nav> 
    </footer>
  );
};

export default Footer;
