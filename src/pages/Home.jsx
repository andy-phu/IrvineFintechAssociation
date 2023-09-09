import React from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Values from '../components/Values'
import Affiliations from '../components/Affiliations'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <Navbar/>
            <Hero/>
            <Mission/>
            <Values/>
            <Affiliations/>
            <Footer/>
        </div>






    );
};

export default Home;
