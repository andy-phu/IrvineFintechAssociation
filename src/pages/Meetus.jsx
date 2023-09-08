import React from "react"
import Navbar from '../components/Navbar'
import MeetHero from '../components/MeetHero'
import Footer from '../components/Footer'
import Pres from '../components/Pres'
import Seperator from '../components/Seperator'
import Evp from '../components/Evp'
import Tech from '../components/Tech'
import Fin from '../components/Fin'
import Mark1 from '../components/Mark1'
import Mark2 from '../components/Mark2'
import PR from '../components/PR'
import Event from '../components/Event'


const Meetus = () => {
    return (
        <div className='overflow-x-hidden font-raleway text-gray-200'>
            <Navbar/>
            <MeetHero/>
            <Pres/>
            <Seperator/>
            <Evp/>
            <Seperator/>
            <Tech/>
            <Seperator/>
            <Fin/>
            <Seperator/>
            <Mark1/>
            <Seperator/>
            <Mark2/>
            <Seperator/>
            <PR/>            
            <Footer/>
        </div>






    );
};

export default Meetus;


//<Event/>