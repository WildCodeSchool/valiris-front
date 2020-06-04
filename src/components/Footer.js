import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_valiris.png';
import '../styles/footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <nav className='nav-footer'>
        <ul className='menu-footer'>
          <li><NavLink to='/legal-notice' className='footer-link-item'>{t('navigation-legal-notice.label')}</NavLink></li>
          <li><NavLink to='/CGU' className='footer-link-item'>{t('navigation-terms.label')}</NavLink></li>
        </ul>
        <div className='logo-footer'>
          <NavLink to='/'><img src={logo} alt='logo-valiris' /></NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
