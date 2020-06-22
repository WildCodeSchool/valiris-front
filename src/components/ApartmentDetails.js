import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/detail.css';
import { useTranslation } from 'react-i18next';

const ApartmentDetails = (props) => {
  const { i18n } = useTranslation();
  const [apartment, setApartment] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments/${id}/${i18n.language}`)
      .then(res => res.data)
      .then(data => setApartment(data));
  }, [i18n.language]);

  if (!apartment) {
    return <p>loading...</p>;
  } else {
    console.log(i18n.language);
    return (
      <div className='details-container'>
        <h2 className='apartment-name'>{apartment.name}</h2>
        <div className='carousel-container-detail'>
          <Carousel
            showArrows
            showStatus={false}
            infiniteLoop
            stopOnHover={false}
            transitionTime={600}
            width='80%'
            showIndicators = {false}
          >
            <div>
              <img src={apartment.main_picture_url} alt='Appartement' />
            </div>
            {apartment.url.map((url, index) => {
              return (
                <div className='secondary-picture' key={index}>
                  <img src={url} alt='Appartment' />
                </div>
              );
            })}
          </Carousel>
        </div>
        <p className='apartment-details'>{apartment.details}</p>
      </div>
    );
  }
};

export default ApartmentDetails;
