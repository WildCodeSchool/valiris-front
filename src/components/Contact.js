import React ,{ useState }from 'react';
import { TextField } from '@material-ui/core';
import '../styles/contact.css';
import '../styles/language-selector.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Contact = () => {
  const [form, setForm] = useState({
    firstname:'',
    lastname:'',
    phone: '',
    email: ''
  })

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="dd/MM/yyyy"
        />
        <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        />
        <input
        className='input-contact input-submit'
        type='submit'
        value='valider' />
      </form>
    </div>
  );
};

export default Contact;
