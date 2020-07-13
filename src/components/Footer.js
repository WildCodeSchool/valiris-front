import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_valiris.png';
import '../styles/footer.css';
import { useTranslation } from 'react-i18next';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <nav className='nav-footer'>
        <ul className='menu-footer'>
          <li><NavLink to='/mentions-legales' className='footer-link-item'>{t('navigation-legal-notice.label')}</NavLink></li>
          <li><NavLink to='/CGU' className='footer-link-item'>{t('navigation-terms.label')}</NavLink></li>
          <li><NavLink to='/FAQ' className='footer-link-item'>FAQ</NavLink></li>
        </ul>
        <div className='icons-container'>
          <p className='footer-address'>470 Route de Saint Didier 69760 Limonest</p>
          <ul className='menu-footer-icons'>
            <li><a href='https://www.facebook.com/' className='facebook-icon' target='_blank' rel='noopener noreferrer'><FacebookIcon fontSize='large' /></a></li>
            <li><a href='https://www.youtube.com/' className='youtube-icon' target='_blank' rel='noopener noreferrer'><YoutubeIcon fontSize='large' /></a></li>
          </ul>
        </div>
        <div className='logo-footer'>
          <NavLink to='/'><img src={logo} alt='logo-valiris' /></NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
