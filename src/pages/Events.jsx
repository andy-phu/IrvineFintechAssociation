import React from "react"
import Navbar from '../components/Navbar'
import EventHero from '../components/EventHero'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'


const Events = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <Navbar/>
            <EventHero/>
            <Schedule/>
            <Calendar/>
            <Footer/>

        </div>






    );
};

export default Events;


