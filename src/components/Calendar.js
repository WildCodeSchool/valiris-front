import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <div className='booking-calendar' style={{width: '70%'}}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            {
              id: '1',
              title: 'Glycines',
              start: '2020-06-22',
              end: '2020-06-28',
              color: 'red',
            },
            {
              id: '2',
              title: 'Chasselas',
              start: '2020-06-22',
              end: '2020-06-28',
              color: 'blue',
            },
            {
              id: '3',
              title: 'Pêches de Vigne',
              start: '2020-06-22',
              end: '2020-06-28',
              color: 'green',
            },
            {
              id: '4',
              title: 'Bigarreaux Burlat',
              start: '2020-06-22',
              end: '2020-06-28',
              color: 'orange',
            },
        ]}
      />
    </div>
  );
};

export default Calendar;
