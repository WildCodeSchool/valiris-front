import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      Footer
      <nav>
        <ul>
          <li><NavLink to="/legal-notice">Mentions Légales</NavLink></li>
          <li><NavLink to="/CGU">Conditions Générales d'Utilisation</NavLink></li>
        </ul>
      </nav>
    </footer>
    )
};

export default Footer;
