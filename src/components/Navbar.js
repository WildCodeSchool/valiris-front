import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation()
  return (
      <nav>
        <ul>
          <li><NavLink to="/">{t('navigation-home.label')}</NavLink></li>
          <li><NavLink to="/gallerie">{t('navigation-gallery.label')}</NavLink></li>
          <li><NavLink to="/a-propos">{t('navigation-about.label')}</NavLink></li>
          <li><NavLink to="/tarifs">{t('navigation-prices.label')}</NavLink></li>   
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar;

