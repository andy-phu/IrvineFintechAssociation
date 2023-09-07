import React from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Values from '../components/Values'
import Seperator from '../components/Seperator'
import Affiliations from '../components/Affiliations'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='overflow-x-hidden font-raleway text-gray-200'>
            <Navbar/>
            <Hero/>
            <Mission/>
            <Seperator/>
            <Values/>
            <Seperator/>
            <Affiliations/>
            <Footer/>
        </div>






    );
};

export default Home;
