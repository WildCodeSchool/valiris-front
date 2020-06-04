import React, { useState }from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@material-ui/core/Switch';

const LanguageSelector = () => {

  const [toggled, setToggled] = useState(true);
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    setToggled(!toggled)
    if(event.target.checked){
      i18n.changeLanguage('fr')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
  <Switch size="small" checked={toggled} color="primary" onChange={changeLanguage} />
  )
}

export default LanguageSelector;
