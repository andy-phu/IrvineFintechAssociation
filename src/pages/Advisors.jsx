import React from "react"
import Navbar from '../components/Navbar'
import AdvisorHero from '../components/AdvisorHero'
import Bill from '../components/Bill'
import Jinfei from '../components/Jinfei'
import AdvisorSeperator from '../components/AdvisorSeperator'
import Footer from '../components/Footer'
import AdvisorGrid from '../components/AdvisorGrid'

//import Event from '../components/Event'


const Board = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <Navbar/>
            <AdvisorHero/>
            {/* <Bill/>
            <AdvisorSeperator/>
            <Jinfei/> */}
            <AdvisorGrid/>
            <Footer/>
        </div>






    );
};

export default Board;


//<Event/>