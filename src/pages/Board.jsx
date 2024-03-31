import React from "react"
import Navbar from '../components/Navbar'
import BoardHero from '../components/BoardHero'
import Footer from '../components/Footer'
import Pres from '../components/Pres'
import Seperator from '../components/Seperator'
import Evp from '../components/Evp'
import Tech from '../components/Tech'
import Fin from '../components/Fin'
import Mark1 from '../components/Mark1'
import Mark2 from '../components/Mark2'
import PR from '../components/PR'
import BoardGrid from '../components/boardGrid'
//import Event from '../components/Event'


const Board = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <Navbar/>
            <BoardHero/>
            {/* <Pres/>
            <Seperator/>
            <Evp/>
            <Seperator/>[p]
            <Tech/>
            <Seperator/>
            <Fin/>
            <Seperator/>
            <Mark1/>
            <Seperator/>
            <Mark2/>
            <Seperator/>
            <PR/>             */}
            <BoardGrid/>
            <Footer/>
        </div>






    );
};

export default Board;


//<Event/>