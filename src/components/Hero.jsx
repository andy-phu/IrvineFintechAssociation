import React from 'react'
import heroIFA from '../images/heroIFA.jpeg'
import {RiArrowDropDownLine} from "react-icons/ri"


const Hero = () =>{
    return(
        <div id='hero'  className='mx-auto h-screen'>
            <div className='h-full w-full h-screen relative' >
                {/*Overlay */}
                <div className='absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center items-center h-screen ' >
                    <h2 className=' text-gray-200 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-widest'>IRVINE FINTECH ASSOCIATION</h2>
                    <h2 className=' text-gray-200 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-3xl tracking-widest'>University of California, Irvine</h2>
                    <h2 className=' text-gray-200 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-3xl tracking-widest'>Est. 2023</h2>

                </div>
                <img className='h-screen w-full w-screen object-cover' src={heroIFA} alt="hero"/>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 '>
                    <RiArrowDropDownLine className='w-20 h-16 z-10 text-white' />
                </div>
            </div>

            {/*description */}
            
        </div>

            
        
    )
}

export default Hero