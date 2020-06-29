import React from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from './Calendar';
import '../styles/booking.css';

const Booking = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('page-prices-h1.label')}</h1>
      <p>
      Tarif toutes charges comprises (Eau, Electricité, chauffage, accès internet wifi, assurance occupant).                                                                                                                            À la semaine à partir de 480 €.                                                                                                                                                                                                                                                                        Au mois, à partir de 790 €.                                                                                                                                                                                                                                                         Acompte à la réservation de 1/3 par virement, le solde à l'arrivée par CB.                                                                                                                                                              Caution de garantie de 500 € par CB à l'arrivée, non prélevée.                                                                                                                                                                           Remboursement de l'acompte si annulation au moins 14 jours avant la date prévue d'arrivée.                                                                                                     Remboursement à 50% de l'acompte si annulation au moins 4 jours avant la date prévus d'arrivée.                                                                                                                          Pas de remboursement si annulation à moins de 4 jours de la date prévue d'arrivée.
      </p>
      <Calendar />
    </div>
  );
};

export default Booking;
