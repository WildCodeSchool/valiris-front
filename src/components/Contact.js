import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/contact.css';
import '../styles/language-selector.css';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    startDate: '',
    endDate: ''
  });

  // const [booking, setBooking] = useState({
  //   message: '',
  //   startDate: '',
  //   endDate: ''
  // });
  // createTask = () => {
  //   this.setState({ newTask: { ...this.state.newTask, _submitting: true } });
  //   const { newTask } = this.state;
  //   console.log('Posting the new task on the server... (TODO)');
  //   // TODO
  //   axios.post('http://localhost:5000/tasks', newTask)
  //     .then(res => res.data)
  //     .then(data => {
  //       this.setState({ taskList: [...this.state.taskList, data], newTask: { ...newTaskDefaultAttributes } });
  //       this.showSuccessMessage(`Task ${data.name} successfully created on the server !`);
  //     });
  // }

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Post Axios
    axios.post('http://localhost:3000/forms', formData)
      .then(res => res.data)
      .then(data => console.log(data));
    await axios.post('http://localhost:3000/send', formData)
    .then(res => res.data)
    .then(data => console.log(data));
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
      <h1>Contact</h1>
      <form className='contact-form' noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
        <TextField
          className='input-contact'
          id='Prénom'
          label='Prénom'
          variant='outlined'
          value={formData.firstname}
          onChange={(e) => handleChangeForm(e)}
          name='firstname'
        />
        <TextField
          className='input-contact'
          id='Nom'
          label='Nom'
          variant='outlined'
          value={formData.lastname}
          onChange={(e) => handleChangeForm(e)}
          name='lastname'
        />
        <TextField
          className='input-contact'
          id='Téléphone'
          label='Téléphone'
          variant='outlined'
          value={formData.phone}
          onChange={(e) => handleChangeForm(e)}
          name='phone'
          required
        />
        <TextField
          className='input-contact'
          id='E-mail'
          label='E-mail'
          variant='outlined'
          value={formData.email}
          onChange={(e) => handleChangeForm(e)}
          name='email'
          type='mail'
          required
        />
        <div className='date-picker'>
          <TextField
            id='start-date'
            label="Date d'arrivée"
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
            id='end-date'
            label='Date de départ'
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
          className='input-contact'
          id='message'
          label='Message'
          variant='outlined'
          value={formData.message}
          onChange={(e) => handleChangeForm(e)}
          name='message'
          multiline
          rows={8}
          required
        />
        <input
          className='input-contact input-submit'
          type='submit'
          value='Valider'
        />
      </form>
    </div>
  );
};

export default Contact;
