import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import '../styles/contact.css';
import '../styles/language-selector.css';
import 'react-datepicker/dist/react-datepicker.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    startDate: '',
    endDate: ''
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


  const submitValidation = () => {
    const { firstname, lastname, phone, email, message } = formData;
    let copyErrorInput = errorInput;
    let copyMsgError = msgError;
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
    if (Object.values(errorInput).filter(e => e).length === 0) {
      setLoading(true);
      setErrorForm(false);
      axios.post('http://localhost:3000/forms', formData)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            message: '',
            startDate: '',
            endDate: ''
          });
          setMessageForm(true);
          setLoading(false);
        })
        .catch(error => {
          setErrorForm(true);
          setLoading(false);
          setMessageForm(true);
          console.log(error);
        });
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
    <div>
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
        <TextField
          error={!!errorInput.message}
          helperText={msgError.message}
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
            {!errorForm ? 'Votre message a bien été envoyé et sera traité dans les meilleurs délais' : 'Une erreur est survenue, veuillez essayer à nouveau'}
          </Alert>
        </Snackbar>
        {/* {messageForm && <p>Votre message a bien été envoyé et sera traité dans les meilleurs délais</p>} */}
      </form>
    </div>
  );
};

export default Contact;
