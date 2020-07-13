import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import BurgerButton from './BurgerButton';
import { useTranslation } from 'react-i18next';

const Navbar = ({ show, handleOpen, handleClose }) => {
  const { t } = useTranslation();
  let navClasses = 'nav-menu';
  if (show) {
    navClasses = 'nav-menu open';
  }

  return (
    <>
      <BurgerButton handleClick={handleOpen} />
      <nav className={`mobile-menu ${navClasses}`}>
        <div className='closing-menu'>
          <i className='fas fa-times' onClick={handleClose} />
        </div>
        <ul className='menuItems'>
          <li><NavLink onClick={handleClose} to='/'>{t('navigation-home.label')}</NavLink></li>
          <li><NavLink onClick={handleClose} to='/galerie'>{t('navigation-gallery.label')}</NavLink></li>
          <li><NavLink onClick={handleClose} to='/a-propos'>{t('navigation-about.label')}</NavLink></li>
          <li><NavLink onClick={handleClose} to='/tarifs'>{t('navigation-prices.label')}</NavLink></li>
          <NavLink onClick={handleClose} to='/contact'><button className='contact-button'>Contact</button></NavLink>
        </ul>
      </nav>
      <nav className='desktop-menu'>
        <ul>
          <li><NavLink className='menu-item-desktop' exact activeClassName='active' to='/'>{t('navigation-home.label')}</NavLink></li>
          <li><NavLink className='menu-item-desktop' activeClassName='active' to='/galerie'>{t('navigation-gallery.label')}</NavLink></li>
          <li><NavLink className='menu-item-desktop' activeClassName='active' to='/a-propos'>{t('navigation-about.label')}</NavLink></li>
          <li><NavLink className='menu-item-desktop' activeClassName='active' to='/tarifs'>{t('navigation-prices.label')}</NavLink></li>
          <NavLink to='/contact'><button className='contact-button'>Contact</button></NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
