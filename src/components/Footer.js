import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation()
  return (
    <footer>
      Footer
      <nav>
        <ul>
          <li><NavLink to="/legal-notice">{t('navigation-legal-notice.label')}</NavLink></li>
          <li><NavLink to="/CGU">{t('navigation-terms.label')}</NavLink></li>
        </ul>
      </nav>
    </footer>
    )
};

export default Footer;
