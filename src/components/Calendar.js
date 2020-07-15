import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import API from '../API';

const Calendar = () => {
  const { t, i18n } = useTranslation();
  const [apartments, setApartments] = useState();
  const [availabilities, setAvailabilities] = useState({
    id: '',
    title: '',
    start: '',
    end: ''
  });
  const [currentId, setCurrentId] = useState()

  useEffect(() => {
    API.get('/apartments')
      .then(res => res.data)
      .then(data => setApartments(data));
  }, []);

  const handleClick = (id) => {
    setCurrentId(id);
    API.get(`/apartments/${id}/availabilities`)
      .then(res => res.data)
      .then(data => {
        setAvailabilities(data.map(d => {
          return {
            id: d.id,
            title: d.name,
            start: d.starting_date,
            end: d.ending_date,
            color: '#329797',
            display: 'background'
          };
        }));
      });
  };

  return (
    <div className='booking-calendar'>
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
        height='auto'
      />
      <div className='legend-container'>
        <span className='avalaible'>{t('calendar-available.label')}</span>
        <span className='rent'>{t('calendar-rent.label')}</span>
      </div>
      <div className='apartments-availability-btns'>
        {apartments
          ? apartments.map(apartment => <button onClick={() => handleClick(apartment.id)} key={apartment.id} className={apartment.id === currentId ? 'availability-btn active': 'availability-btn'} activeClassName='active'>{apartment.name}</button>)
          : ''}
      </div>
    </div>
  );
};

export default Calendar;
