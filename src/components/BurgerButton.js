import React from 'react';
import '../styles/burger-button.css';

const BurgerButton = ({ handleClick }) => {
  return (
    <button className='toggle-button' onClick={handleClick}>
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
    </button>
  );
};

export default BurgerButton;