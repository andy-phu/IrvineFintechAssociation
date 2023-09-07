import React from "react"
import affiliations from '../images/Daco_474383.png'


const Affiliations = () => {
    return (
        <div className='h-screen'>
            <div className="pt-4 flex justify-center">
                <h1 className='text-6xl text-black font-extrabold pt-20'>AFFILIATED WITH</h1>
            </div>
            <div className='flex justify-center pt-20'>
                <img className=' w-88 h-32' src={affiliations} alt="affiliations"/>
            </div>
        </div>






    );
};

export default Affiliations;
