import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import API from '../API';

const Calendar = () => {
  const { i18n } = useTranslation();
  const [apartments, setApartments] = useState();
  const [availabilities, setAvailabilities] = useState({
    id: '',
    title: '',
    start: '',
    end: ''
  });

  useEffect(() => {
    API.get('/apartments')
      .then(res => res.data)
      .then(data => setApartments(data));
  }, []);

  const handleClick = (id) => {
    API.get(`/apartments/${id}/availabilities`)
      .then(res => res.data)
      .then(data => {
        setAvailabilities(data.map(d => {
          return {
            id: d.id,
            title: d.name,
            start: d.starting_date,
            end: d.ending_date,
            color: '#329797'
          };
        }));
      });
  };

  return (
    <div className='booking-calendar' style={{ width: '70%' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={availabilities}
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'prev,next'
        }}
        locale={i18n.language}
      />
      <div className='apartments-availability-btns'>
        {apartments
          ? apartments.map(apartment => <button onClick={() => handleClick(apartment.id)} key={apartment.id} className='availability-btn'>{apartment.name}</button>)
          : ''}
      </div>
    </div>
  );
};

export default Calendar;
