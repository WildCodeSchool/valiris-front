import React, { useState } from 'react';
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
      <p>EN</p>
      <CustomSwitch size='small' checked={toggled} color='primary' onChange={changeLanguage} />
      <p>FR</p>
    </div>
  );
};

export default LanguageSelector;
