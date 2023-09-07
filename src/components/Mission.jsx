import React, {useState, useEffect} from "react"
import logoWithDescription from '../images/logo-with-text-transparent.png'



const Mission = () => {
    return (
        <div className=' text-gray-900 h-screen mb-20'>
            
            <div className='flex justify-center items-center w-screen h-screen'>
                <div className='w-3/5 p-6'>
                    <p className='flex justify-center text-6xl text-green-700 text-opacity-78 font-extrabold tracking-widest py-2'>OUR MISSION</p>
                    <p className='flex justify-center text-2xl tracking-widest font-bold py-2'>Shaping Tomorrow’s Finance Through Tech Exploration</p>
                    <p className='text-2xl tracking-wide text-center py-2'>
                    To empower and prepare UCI students for successful careers in the dynamic FinTech industry while emphasizing the transformative power of technology in shaping the world.
                    </p>
                    <div className='flex justify-center pt-8'><img className='w-80' src={logoWithDescription} alt="logoWithDescription"/></div>
                </div>
            </div>          

        </div>





    );
};

export default Mission;
