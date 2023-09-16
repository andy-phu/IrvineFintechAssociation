import React from 'react'
import heroIFA from '../images/heroIFA.jpeg'
import {RiArrowDropDownLine} from "react-icons/ri"


const BoardHero = () =>{
    return(
        <div id='hero'  className='mx-auto h-screen'>
            <div className='w-full h-screen relative pr-0 mr-0' >
                {/*Overlay */}
                <div className='absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center items-center text-center' >
                    <h2 className=' text-gray-200 px-4 text-4xl md:text-6xl lg:text-6xl font-bold tracking-widest'>2023 - 2024 EXECUTIVE BOARD</h2>

                </div>
                <img className='h-screen w-screen object-cover mr-0 pr-0' src={heroIFA} alt="hero"/>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 '>
                    <RiArrowDropDownLine className='w-20 h-16 z-10 text-white' />
                </div>
                
            </div>

            
        
            
        </div>

    )
}

export default BoardHero