import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/contact.css';
import '../styles/language-selector.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const Contact = () => {
  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: ''
  });
  
  const [booking, setBooking] = useState({
    message: '',
    startDate: '',
    endDate: ''
  })

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

  const handleChangeContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleChangeBooking = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post Axios
    axios.post('http://localhost:3000/contacts', contact)
      .then(res => res.data)
      .then(data => console.log(data));
      
  };

  const getFullDate = () => {
    const day = new Date().getDate();
    let month = new Date().getMonth()+1;
    if (month < 10) {
      month = '0' + month;
    }
    const year = new Date().getFullYear();
    const fullDate = `${year}-${month}-${day}`
    return fullDate;    
  }

  return (
    <div>
      <h1>Contact</h1>
      <form className='contact-form' noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
        <TextField
          className='input-contact'
          id='Prénom'
          label='Prénom'
          variant='outlined'
          value={contact.firstname}
          onChange={(e) => handleChangeContact(e)}
          name='firstname'
        />
        <TextField
          className='input-contact'
          id='Nom'
          label='Nom'
          variant='outlined'
          value={contact.lastname}
          onChange={(e) => handleChangeContact(e)}
          name='lastname'
        />
        <TextField
          className='input-contact'
          id='Téléphone'
          label='Téléphone'
          variant='outlined'
          value={contact.phone}
          onChange={(e) => handleChangeContact(e)}
          name='phone'
          required
        />
        <TextField
          className='input-contact'
          id='E-mail'
          label='E-mail'
          variant='outlined'
          value={contact.email}
          onChange={(e) => handleChangeContact(e)}
          name='email'
          type='mail'
          required
        />
        <div className='date-picker'>
          <TextField
          id="start-date"
          label="Date d'arrivée"
          type="date"
          variant='outlined'
          name='startDate'
          value={booking.startDate}
          onChange={(e) => handleChangeBooking(e)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: { min: getFullDate() }
          }}
          />
          <TextField
          id="end-date"
          label="Date de départ"
          type="date"
          variant='outlined'
          name='endDate'
          onChange={(e) => handleChangeBooking(e)}
          value={booking.endDate}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: booking.startDate ? 
            { min : booking.startDate } :
            { min : getFullDate() }
          }}
          /> 
        </div> 
        <TextField
          className='input-contact'
          id='message'
          label="Message"
          variant="outlined"
          value={booking.message}
          onChange={(e) => handleChangeBooking(e)}
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
