import React ,{ useState }from 'react';
import { TextField } from '@material-ui/core';
import '../styles/contact.css';
import '../styles/language-selector.css';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';


const Contact = () => {
  const [form, setForm] = useState({
    firstname:'',
    lastname:'',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post Axios
  }

  return (
    <div>
      <h1>Contact</h1>
      <form className='contact-form' noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="Prénom"
        variant="outlined"
        value={form.firstname}
        onChange={(e) => handleChange(e)}
        name='firstname'/>
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="Nom"
        variant="outlined"
        value={form.lastname}
        onChange={(e) => handleChange(e)}
        name='lastname'
        />
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="Téléphone"
        variant="outlined"
        value={form.phone}
        onChange={(e) => handleChange(e)}
        name='phone'
        required
        />
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        value={form.email}
        onChange={(e) => handleChange(e)}
        name='email'
        type='mail'
        required
        />
        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <input
        className='input-contact input-submit'
        type='submit'
        value='valider' />
      </form>
    </div>
  );
};

export default Contact;
