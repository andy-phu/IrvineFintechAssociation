import React from 'react';

const Calendar = () => {
  return (
    <div className='mx-auto h-screen'>
        <div className='text-center text-5xl lg:text-7xl font-extrabold text-green-700 bg-opacity-78 tracking-wider pb-4 pt-6'>
            <div>IFA CALENDAR</div>   
        </div>
      <div className='flex justify-center items-center'>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2330a75c&ctz=America%2FLos_Angeles&showPrint=0&showTabs=0&showTz=0&showCalendars=0&showNav=1&showTitle=0&src=Y19kNTU4ODBlZWQ2OTYyZDc3NmMxMzc2OTNkOTE2Y2E1MzQ0MzNmMzZlMWM4ZGUzOGM4MDkyYWRkN2I3MzNmNDBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548" 
          style={{ border: 'solid 1px #777', width: '80%', height: '600px'}} 
          frameBorder="0" 
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}

export default Calendar;
