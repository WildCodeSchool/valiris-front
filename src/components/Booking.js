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
                  <li>{t('page-prices-line-1.label')}</li>
                  <li><strong>{t('page-prices-line-2-strong.label')}</strong>{t('page-prices-line-2.label')}</li>
                  <li><strong>{t('page-prices-line-3-strong.label')}</strong>{t('page-prices-line-3.label')}</li>
                  <li>{t('page-prices-line-4.label')}</li>
                  <li>{t('page-prices-line-5.label')}</li>
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
                  <li>{t('page-prices-line-6.label')}</li>
                  <li>{t('page-prices-line-7.label')}</li>
                  <li>{t('page-prices-line-8.label')}</li>
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
