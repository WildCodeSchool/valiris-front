import React from 'react';
import Navbar from './Navbar';
import LanguageSelector from './LanguageSelector';
import '../styles/header.css';
import logo from '../images/logo_valiris.png';

const Header = () => {

  return (
    <header className="header">
      <Navbar />
      <img src={logo} alt='logo' />
      <LanguageSelector />
    </header >
  );
};

export default Header;