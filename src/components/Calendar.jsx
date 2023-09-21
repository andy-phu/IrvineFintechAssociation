import React from 'react';
import Iframe from 'react-iframe';

const Calendar = () => {
  return (
    <div className='mx-auto h-screen'>
      <div className='text-center text-5xl lg:text-7xl font-extrabold text-green-700 bg-opacity-78 tracking-wider pb-4 pt-6'>
        <div>IFA CALENDAR</div>   
      </div>
      <div className='flex justify-center items-center '>
        <Iframe
          url="https://embed.styledcalendar.com/#Kq0FVKtmrIVwR5iXFmnm" 
          width="75%%"
          height="700px"
          frameBorder="0"
          className="styled-calendar-container "
        />
      </div>
    </div>
  );
}

export default Calendar;
