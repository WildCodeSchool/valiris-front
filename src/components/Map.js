import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../styles/Map.css';

const MapComponent = () => {
  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default MapComponent;
