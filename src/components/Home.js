import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <h1>{t('accueil.label')}</h1>
    </div>
  )
}

export default Home

