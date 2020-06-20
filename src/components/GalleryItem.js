import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ apartmentDetails: { id, name_fr } }) => {
  return (
    <div>
      <Link to={`/gallerie/${id}`}>{name_fr}</Link>
    </div>
  );
};

export default GalleryItem;
