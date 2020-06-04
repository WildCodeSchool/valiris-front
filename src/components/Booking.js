import React from 'react';
import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <h1>{t("page-prices-h1.label")}</h1>
    </div>
  )
}

export default Booking;

