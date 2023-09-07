import React, {useState, useEffect} from "react"
import Navbar from '../components/Navbar'
import EventHero from '../components/EventHero'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'


const Events = () => {
    return (
        <div className='overflow-x-hidden font-raleway text-gray-200'>
            <Navbar/>
            <EventHero/>
            <Schedule/>
            <Footer/>

        </div>






    );
};

export default Events;


