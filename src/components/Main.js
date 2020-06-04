import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import ApartmentDetails from './ApartmentDetails';
import AboutUs from './AboutUs';
import Booking from './Booking';
import Contact from './Contact';
import LegalNotice from './LegalNotice';
import TermOfService from './TermOfService';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/gallerie'><Gallery /></Route>
        <Route exact path='/gallerie/:id' render={(routeProps) => <ApartmentDetails {...routeProps} />} />
        <Route exact path='/a-propos'><AboutUs /></Route>
        <Route exact path='/tarifs'><Booking /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/mentions-legales'><LegalNotice /></Route>
        <Route exact path='/cgu'><TermOfService /></Route>
      </Switch>
    </main>
  );
};

export default Main;
