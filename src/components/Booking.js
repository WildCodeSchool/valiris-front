import React from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from './Calendar';
import '../styles/booking.css';

const Booking = () => {
  const { t } = useTranslation();
  return (
    <div className='booking-container'>
      <h1 className='booking-title'>{t('page-prices-h1.label')}</h1>
      <article className='booking-infos'>
        <img className='img-infos' src='https://odis.homeaway.com/odis/listing/3127bdcb-71a6-49e8-b9bd-6050846f9c5c.f6.jpg' alt='maison en pierre' />
        <p className='infos-text'>
          Tarif toutes charges comprises (Eau, Electricité, chauffage, accès internet wifi, assurance occupant).
          <br />À la semaine à partir de 480 €.
          <br />Au mois, à partir de 790 €.
          <br />Acompte à la réservation de 1/3 par virement, le solde à l'arrivée par CB.
          <br />Caution de garantie de 500 € par CB à l'arrivée, non prélevée.
          <br />Remboursement de l'acompte si annulation au moins 14 jours avant la date prévue d'arrivée.
          <br />Remboursement à 50% de l'acompte si annulation au moins 4 jours avant la date prévus d'arrivée.
          <br />Pas de remboursement si annulation à moins de 4 jours de la date prévue d'arrivée.
        </p>
      </article>
      <Calendar />
    </div>
  );
};

export default Booking;
