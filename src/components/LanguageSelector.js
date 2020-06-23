import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@material-ui/core/Switch';
import '../styles/language-selector.css';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';


const CustomSwitch = withStyles({
  switchBase: {
    color: orange[50],
    '&$checked': {
      color: orange[50],
    },
    '&$checked + $track': {
      backgroundColor: orange[50],
    },
  },
  checked: {},
  track: {},
})(Switch);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [toggled, setToggled] = useState(currentLanguage === 'fr');
  
  useEffect(() => {
    setToggled(currentLanguage === 'fr');
  }, [currentLanguage])

  const changeLanguage = (event) => {
    const newLanguage = event.target.checked ? 'fr' : 'en';
    setToggled(!toggled);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
  };

  return (
    <div className='toggle-container'>
      <p>EN</p>
      <CustomSwitch size='small' checked={toggled} color='primary' onChange={changeLanguage} />
      <p>FR</p>
    </div>
  );
};

export default LanguageSelector;
