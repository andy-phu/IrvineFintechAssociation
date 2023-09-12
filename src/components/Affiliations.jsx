import React from "react"
import affiliations from '../images/Daco_474383.png'
import dcp from '../images/dcp.jpeg'


const Affiliations = () => {
    return (
        <div className='h-screen'>
            <div className="pt-4 flex justify-center">
                <h1 className='text-5xl text-green-700 text-opacity-78 font-extrabold pt-20'>AFFILIATED WITH</h1>
            </div>
            <div className='flex justify-center items-center flex-col pt-10 space-y-6'>
                <img className=' w-1/5 h-1/5' src={affiliations} alt="uci"/>
                <img className=' w-1/5 h-1/5' src={dcp} alt="division of career pathways"/>
            </div>
        </div>






    );
};

export default Affiliations;
