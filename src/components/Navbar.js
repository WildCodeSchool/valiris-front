import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/gallerie">Galerie</NavLink></li>
          <li><NavLink to="/a-propos">Qui sommes-nous / A propos</NavLink></li>
          <li><NavLink to="/tarifs">Tarifs et disponibilités</NavLink></li>   
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar;

