import React from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from './Calendar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/booking.css';

const Booking = () => {
  const { t } = useTranslation();
  return (
    <div className='booking-container'>
      <h1 className='booking-title'>{t('page-prices-h1.label')}</h1>
      <article className='booking-infos'>
        <img className='img-infos' src='https://odis.homeaway.com/odis/listing/3127bdcb-71a6-49e8-b9bd-6050846f9c5c.f6.jpg' alt='maison en pierre' />
        <div className='infos-card'>
          <ExpansionPanel style={{ width: '70%', margin: '20px auto' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='title-dropdown'>{t('page-prices-first-subtitle.label')}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul className='infos-text'>
                  <li>Tarif toutes charges comprises (Eau, Electricité, chauffage, accès internet wifi, assurance occupant).</li>
                  <li><strong>À la semaine</strong> à partir de 480 €.</li>
                  <li><strong>Au mois</strong>, à partir de 790 €.</li>
                  <li>Acompte à la réservation de 1/3 par virement, le solde à l'arrivée par CB.</li>
                  <li>Caution de garantie de 500 € par CB à l'arrivée, non prélevée.</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ width: '70%', margin: '20px auto' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='title-dropdown'>{t('page-prices-second-subtitle.label')}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul className='infos-text'>
                  <li>Remboursement de l'acompte si annulation au moins 14 jours avant la date prévue d'arrivée.</li>
                  <li>Remboursement à 50% de l'acompte si annulation au moins 4 jours avant la date prévus d'arrivée.</li>
                  <li>Pas de remboursement si annulation à moins de 4 jours de la date prévue d'arrivée.</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </article>
      <Calendar />
    </div>
  );
};

export default Booking;
