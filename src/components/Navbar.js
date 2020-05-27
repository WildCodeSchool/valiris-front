import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/gallery">Galerie</NavLink></li>
          <li><NavLink to="/prices-and-availability">Tarifs et disponibilités</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about-us">Qui sommes-nous / A propos</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar;

