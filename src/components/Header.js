import React, { useState } from 'react';
import Navbar from './Navbar';
import LanguageSelector from './LanguageSelector';
import '../styles/header.css';
import logo from '../images/logo_valiris.png';

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const openBurgerMenu = () => {
    setOpenBurger(true);
  };

  const closeBurgerMenu = () => {
    setOpenBurger(false);
  };

  return (
    <header className='header'>
      <a href='/'><img src={logo} alt=' logo-valiris' className='logo-header' /></a>
      <div className='right-header-container'>
        <LanguageSelector />
        <Navbar handleOpen={openBurgerMenu} handleClose={closeBurgerMenu} show={openBurger} />
      </div>
    </header>
  );
};

export default Header;
