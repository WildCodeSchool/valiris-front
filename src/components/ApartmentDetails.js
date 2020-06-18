import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ApartmentDetails = (props) => {
  const [apartment, setApartment] = useState();
  // const [availabilities, setAvailabilities] = useState();

  useEffect(async () => {
    const id = props.match.params.id;
    await axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments/${id}`)
      .then(res => res.data)
      .then(data => setApartment(data));

    // await axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments/${id}/availabilities`)
    //   .then(res => res.data)
    //   .then(data => setAvailabilities(data));
  }, []);

  if (!apartment) {
    return <p>loading...</p>;
  } else {
    console.log(apartment);
    return (
      <>
      <div>
        <Carousel
        autoPlay
        showArrows
        showStatus={false}
        infiniteLoop
        stopOnHover={false}
        interval={6000}
        transitionTime={600}
        width='80%'
      >
        <div>
          <img src={apartment.main_picture_url} alt='Appartement' />
        </div>
        <div>
          <img src='https://www.vittoriarizzoli.com/wp-content/uploads/tbnl-4.jpg' alt='caroussel 1' />
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/16/c4/35/16c4351260e47ac6f3ef397bfae21fbb.jpg' alt='caroussel 2' />
        </div>
        <div>
          <img src='https://www.planete-deco.fr/wp-content/uploads/2020/03/TO1.jpeg' alt='caroussel 3' />
        </div>
      </Carousel>
      </div>
      <p>{apartment.details_fr}</p>
      </>
    );
  }
};

export default ApartmentDetails;
