import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import BurgerButton from './BurgerButton';

const Navbar = ({ show, handleOpen, handleClose }) => {
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
          <li><NavLink className='menu-item' to='/'>Accueil</NavLink></li>
          <li><NavLink className='menu-item' to='/gallerie'>Galerie</NavLink></li>
          <li><NavLink className='menu-item' to='/a-propos'>Qui sommes-nous</NavLink></li>
          <li><NavLink className='menu-item' to='/tarifs'>Tarifs et disponibilités</NavLink></li>
          <li><NavLink className='menu-item' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
      <nav className='desktop-menu'>
        <ul>
          <li><NavLink className='menu-item' to='/'>Accueil</NavLink></li>
          <li><NavLink className='menu-item' to='/gallerie'>Galerie</NavLink></li>
          <li><NavLink className='menu-item' to='/a-propos'>Qui sommes-nous</NavLink></li>
          <li><NavLink className='menu-item' to='/tarifs'>Tarifs et disponibilités</NavLink></li>
          <button className='contact-button'><NavLink to='/contact'>Contact</NavLink></button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
