import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import '../styles/contact.css';
import '../styles/language-selector.css';
import 'react-datepicker/dist/react-datepicker.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from '../API';
import { useTranslation } from 'react-i18next';
import MapComponent from './Map';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  toggleContainer: {
    margin: theme.spacing(2, 0)
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [alignment, setAlignment] = useState('info');
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    startDate: '',
    endDate: '',
    apartment: ''
  });
  const [messageForm, setMessageForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorForm, setErrorForm] = useState(false);

  const [errorInput, setErrorInput] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    email: false,
    message: false
  });

  const [msgError, setMsgError] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
  });
  const [msgAlert, setMsgAlert] = useState('');

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    API.get('/apartments')
      .then(res => res.data)
      .then(data => setApartments(data.map(apartment => {
        return { name: apartment.name, id: apartment.id };
      })));
  }, []);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const submitValidation = () => {
    const { firstname, lastname, phone, email, message } = formData;
    const copyErrorInput = errorInput;
    const copyMsgError = msgError;
    if (firstname.length === 0) {
      copyErrorInput.firstname = true;
      copyMsgError.firstname = t('form-firstname-required.label');
    }
    if (lastname.length === 0) {
      copyErrorInput.lastname = true;
      copyMsgError.lastname = t('form-lastname-required.label');
    }
    if (phone.length === 0) {
      copyErrorInput.phone = true;
      copyMsgError.phone = t('form-phone-required.label');
    }
    if (email.length === 0) {
      copyErrorInput.email = true;
      copyMsgError.email = t('form-email-required.label');
    }
    if (message.length === 0) {
      copyErrorInput.message = true;
      copyMsgError.message = t('form-message-required.label');
    }
    setErrorInput({ ...copyErrorInput });
    setMsgError({ ...copyMsgError });
  };

  const handleBlur = (e) => {
    const emailValidator = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}/;
    const phoneValidator = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/; /* eslint-disable-line */
    if (e.target.name === 'email' && !emailValidator.test(e.target.value) && e.target.value.length >= 1) {
      setErrorInput({
        ...errorInput, email: true
      });
      setMsgError({
        ...msgError, email: t('form-email-error.label')
      });
    } else if (e.target.name === 'phone' && !phoneValidator.test(e.target.value) && e.target.value.length >= 1) {
      setErrorInput({
        ...errorInput, phone: true
      });
      setMsgError({
        ...msgError, phone: t('form-phone-error.label')
      });
    } else if (e.target.name === 'message' && e.target.value.length >= 500) {
      setErrorInput({
        ...errorInput, message: true
      });
      setMsgError({
        ...msgError, message: t('form-message-length-error.label')
      });
    } else if (e.target.value.length === 0 && e.target.required) {
      setErrorInput({
        ...errorInput, [e.target.name]: true
      });
      setMsgError({
        ...msgError, [e.target.name]: t('form-message-error.label', { champ: e.target.id })
      });
    } else {
      setErrorInput({
        ...errorInput, [e.target.name]: false
      });
      setMsgError({
        ...msgError, [e.target.name]: ''
      });
    }
  };

  function Alert (props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  const handleCloseMui = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageForm(false);
  };

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitValidation();
    setErrorForm(false);
    if (!formData.apartment) {
      setMessageForm(true);
      setErrorForm(true);
      setLoading(false);
      setMsgAlert(t('form-apartment-error.label'));
    } else if (!formData.startDate || !formData.endDate) {
      setMessageForm(true);
      setErrorForm(true);
      setLoading(false);
      setMsgAlert(t('form-date-error.label'));
    } else if (formData.endDate <= formData.startDate) {
      setMessageForm(true);
      setErrorForm(true);
      setLoading(false);
      setMsgAlert(t('form-valid-date-error.label'));
    } else if (Object.values(errorInput).filter(e => e).length === 0) {
      setLoading(true);
      API.post('/contacts', formData)
        .then(res => res.data)
        .then(data => {
          setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            message: '',
            startDate: '',
            endDate: '',
            apartment: ''
          });
          setMessageForm(true);
          setLoading(false);
          setMsgAlert('Votre message a bien été envoyé et sera traité dans les meilleurs délais');
        })
        .catch(error => {
          console.error(error);
          setMsgAlert('Une erreur est survenue, veuillez essayer à nouveau');
          setErrorForm(true);
          setLoading(false);
          setMessageForm(true);
        });
    } else {
      setMsgAlert('Merci de bien renseigner l\'ensemble des champs requis.');
      setMessageForm(true);
      setErrorForm(true);
    }
  };

  const getFullDate = () => {
    const day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const year = new Date().getFullYear();
    const fullDate = `${year}-${month}-${day}`;
    return fullDate;
  };

  return (
    <div className='contact-container'>
      <h2>{t('contact-title.label')}</h2>
      <p>{t('page-contact-subtitle.label')}</p>
      <Grid container spacing={2} className='toggle-form-container'>
        <Grid className='toggle-form-item'>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label='text alignment'
              style={{ width: '100%' }}
            >
              <ToggleButton value='info' aria-label='get-info' className='btn-toggle-booking'>
                <p>{t('form-info-request.label')}</p>
              </ToggleButton>
              <ToggleButton value='booking' aria-label='go-booking' className='btn-toggle-booking'>
                <p>{t('form-booking-request.label')}</p>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
      <form className='contact-form' noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
        <TextField
          className='input-contact'
          error={!!errorInput.firstname}
          helperText={msgError.firstname}
          id={t('form-firstname.label')}
          label={t('form-firstname.label')}
          variant='outlined'
          value={formData.firstname}
          onChange={(e) => handleChangeForm(e)}
          onBlur={(e) => handleBlur(e)}
          name='firstname'
          required
        />
        <TextField
          className='input-contact'
          error={!!errorInput.lastname}
          helperText={msgError.lastname}
          id={t('form-lastname.label')}
          label={t('form-lastname.label')}
          variant='outlined'
          value={formData.lastname}
          onChange={(e) => handleChangeForm(e)}
          onBlur={(e) => handleBlur(e)}
          name='lastname'
          required
        />
        <TextField
          className='input-contact'
          error={!!errorInput.phone}
          helperText={msgError.phone}
          id={t('form-phone.label')}
          label={t('form-phone.label')}
          variant='outlined'
          value={formData.phone}
          onChange={(e) => handleChangeForm(e)}
          onBlur={(e) => handleBlur(e)}
          name='phone'
          required
        />
        <TextField
          error={!!errorInput.email}
          helperText={msgError.email}
          className='input-contact'
          id={t('form-email.label')}
          label={t('form-email.label')}
          variant='outlined'
          value={formData.email}
          onChange={(e) => handleChangeForm(e)}
          onBlur={(e) => handleBlur(e)}
          name='email'
          type='mail'
          required
        />

        {alignment === 'booking' &&
          <>
            <div className='date-picker'>
              <TextField
                className='date-input'
                id={t('form-arrival-date.label')}
                label={t('form-arrival-date.label')}
                type='date'
                variant='outlined'
                name='startDate'
                value={formData.startDate}
                onChange={(e) => handleChangeForm(e)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: { min: getFullDate() }
                }}
              />
              <TextField
                className='date-input'
                id={t('form-leaving-date.label')}
                label={t('form-leaving-date.label')}
                type='date'
                variant='outlined'
                name='endDate'
                onChange={(e) => handleChangeForm(e)}
                value={formData.endDate}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: formData.startDate
                    ? { min: formData.startDate }
                    : { min: getFullDate() }
                }}
              />
            </div>
            <FormControl variant='outlined' className={`${classes.formControl} input-contact`}>
              <InputLabel htmlFor='outlined-age-native-simple'>{t('form-apartment.label')}</InputLabel>
              <Select
                native
                value={formData.apartment}
                onChange={(e) => handleChangeForm(e)}
                name='apartment'
                label={t('form-apartment.label')}
                inputProps={{
                  id: 'outlined-age-native-simple'
                }}
              >
                <option value='' />
                {apartments.map((apartment, index) => {
                  return <option key={index} value={apartment.id}>{apartment.name}</option>;
                })}
              </Select>
            </FormControl>
          </>}
        <TextField
          error={!!errorInput.message}
          helperText={msgError.message || `${formData.message.length}/500`}
          className='input-contact'
          id='message'
          label='Message'
          variant='outlined'
          value={formData.message}
          onChange={(e) => handleChangeForm(e)}
          onBlur={(e) => handleBlur(e)}
          name='message'
          multiline
          rows={8}
          required
        />
        {loading ? <CircularProgress style={{ width: '50px', height: '50px' }} /> : <input className='input-contact input-submit' type='submit' value={t('form-submit.label')} />}
        <Snackbar open={messageForm} autoHideDuration={6000} onClose={handleCloseMui}>
          <Alert onClose={handleCloseMui} severity={!errorForm ? 'success' : 'error'}>
            {msgAlert}
          </Alert>
        </Snackbar>
      </form>
      <h2>{t('contact-map-title.label')}</h2>
      <div className='find-us-container'>
        <MapComponent />
        <div className='infos-container'>
          <ul>
            <li><span className='category-name'>{t('contact-adress.label')} : </span>470 Route de Saint Didier 69760 Limonest</li>
            <hr className='separator' />
            <li><span className='category-name'>{t('contact-phone.label')} : </span>06.00.00.00.00</li>
            <hr className='separator' />
            <li><span className='category-name'>Email : </span>valiris@résidence.fr</li>
            <hr className='separator' />
          </ul>
          <div className='access'><span className='category-name'>{t('contact-access.label')} : </span>
            <p><strong>{t('form-by-car.label')} </strong>
              {t('form-by-car-text.label')}
            </p>
            <p><strong>{t('form-public-transport.label')} </strong>
              {t('form-public-transport-text1.label')} <a className='tcl-link' href='https://www.tcl.fr/' target='_blank' rel='noopener noreferrer'>TCL</a> {t('form-public-transport-text2.label')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
