import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react';
//import 'react-calendar/dist/Calendar.css';

function CopticCalendar() {
  const [date, setDate] = useState(new Date());
  const [holiday, setHoliday] = useState('');

  return (
    <>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      </>
  );

}

export default CopticCalendar;