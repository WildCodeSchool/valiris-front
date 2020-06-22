import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import axios from 'axios';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  // const { t } = useTranslation();
  const [apartments, setApartments] = useState();

  

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments`)
      .then(res => res.data)
      .then(data => setApartments(data));
  }, []);

  if (!apartments) {
    return <p>loading...</p>;
  } else {
    return (
      <div className='gallery-container'>
        {apartments.map(apartment => {
          return <GalleryItem key={apartment.id} apartmentDetails={apartment} />;
        })}
      </div>
    );
  }
};

export default Gallery;
