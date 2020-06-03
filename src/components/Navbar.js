import React from 'react';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import '../styles/navbar.css';

const Navbar = () => {

  return (
    <>
      <nav className='mobile-menu'>
        <Menu >
          <NavLink id="accueil" className="menu-item mobile" to="/">Accueil</NavLink>
          <NavLink id="gallerie" className="menu-item mobile" to="/gallerie">About</NavLink>
          <NavLink id="contact" className="menu-item mobile" to="/contact">Contact</NavLink>
          <NavLink id="tarifs" className="menu-item mobile" to="/tarifs">Tarifs et disponibilités</NavLink>
          <NavLink id="a-propos" className="menu-item mobile" to="/a-propos">Qui sommes-nous : A propos</NavLink>
        </Menu>
      </nav>
      <nav className='desktop-menu'>
        <ul>
          <li><NavLink className='menu-item desktop' to='/'>Accueil</NavLink></li>
          <li><NavLink className='menu-item desktop' to='/gallerie'>Galerie</NavLink></li>
          <li><NavLink className='menu-item desktop' to='/a-propos'>Qui sommes-nous / A propos</NavLink></li>
          <li><NavLink className='menu-item desktop' to='/tarifs'>Tarifs et disponibilités</NavLink></li>
          <li><NavLink className='menu-item desktop' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
