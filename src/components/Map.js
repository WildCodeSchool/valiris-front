import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../styles/Map.css';

const MapComponent = () => {
  const position = [45.8322560, 4.7753658];
  return (
    <Map center={position} zoom={14}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapComponent;
