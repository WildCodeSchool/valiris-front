import React from 'react';
import { Link } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/gallery.css';
import { useTranslation } from 'react-i18next';

const muiBaseTheme = createMuiTheme();

const theme = {
  overrides: {
    MuiCard: {
      root: {
        '&.MuiEngagementCard--01': {
          transition: '0.3s',
          maxWidth: 300,
          margin: 'auto',
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
          },
          '& .MuiCardMedia-root': {
            paddingTop: '56.25%'
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: muiBaseTheme.spacing.unit * 3
          },
          '& .MuiDivider-root': {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`
          },
          '& .MuiTypography--heading': {
            fontWeight: 'bold'
          },
          '& .MuiTypography--subheading': {
            lineHeight: 1.8
          },
          '& .MuiAvatar-root': {
            display: 'inline-block',
            border: '2px solid white',
            '&:not(:first-of-type)': {
              marginLeft: -muiBaseTheme.spacing.unit
            }
          }
        }
      }
    }
  }
};

const GalleryItem = ({ apartmentDetails: { id, name, title, mainPictureUrl } }) => {
  const { t } = useTranslation();
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className='gallery-item'>
        <Card className='MuiEngagementCard--01'>
          <CardMedia
            className='MuiCardMedia-root'
            image={mainPictureUrl}
          />
          <CardContent className='MuiCardContent-root card-content'>
            <Typography
              className='MuiTypography--heading'
              variant='h6'
              gutterBottom
            >
              {name}
            </Typography>
            <Typography
              className='MuiTypography--subheading text-details'
              variant='caption'
            >
              {title}
            </Typography>
            <Link to={`/galerie/${id}`}><button className='read-more-button'>{t('gallery-more-button.label')}</button></Link>
          </CardContent>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};

export default GalleryItem;
