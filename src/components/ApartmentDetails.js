import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';


const ApartmentDetails = (props) => {
  const [apartment, setApartment] = useState();
  const [availabilities, setAvailabilities] = useState();

  useEffect(async () => {
    const id = props.match.params.id;
    console.log(`${process.env.REACT_APP_API_BASE_URL}/apartments/${id}`)
    await axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments/${id}`)
    .then(res => res.data )
    .then(data => setApartment(data))

    await axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments/${id}/availabilities`)
    .then(res => res.data )
    .then(data => setAvailabilities(data))
  }, [])

  if(!apartment){
    return <p>loading...</p>
  } else {
    return (
      <div>
        {apartment.id}
      </div>
    );
  }

};

export default ApartmentDetails;
