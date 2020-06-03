import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@material-ui/core/Switch';
import '../styles/language-selector.css'

const LanguageSelector = () => {
  const [toggled, setToggled] = useState(true);
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    setToggled(!toggled);
    if (event.target.checked) {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <div className='toggle-container'>
      <p>en</p>
      <Switch size='small' checked={toggled} color='primary' onChange={changeLanguage} />
      <p>fr</p>
    </div>
  );
};

export default LanguageSelector;
