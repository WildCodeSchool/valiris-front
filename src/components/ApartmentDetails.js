import React, { useEffect, useState } from 'react';
import API from '../API';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/detail.css';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@material-ui/core/CircularProgress';

const ApartmentDetails = (props) => {
  const { i18n } = useTranslation();
  const [apartment, setApartment] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    API.get(`/apartments/${id}`)
      .then(res => res.data)
      .then(data => setApartment(data));
  }, [i18n.language, props.match.params.id]);

  if (!apartment) {
    return <div className='loader'><CircularProgress style={{ width: '70px', height: '70px' }} /></div>;
  } else {
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
            showIndicators={false}
          >
            <div>
              <img src={'http://localhost:3000/' + apartment.mainPictureUrl} alt='Appartement' />
            </div>
            {apartment.url.map((url, index) => {
              return (
                <div className='secondary-picture' key={index}>
                  <img src={'http://localhost:3000/' + url} alt='Appartment' />
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
