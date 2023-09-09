import React from "react";
import man from '../images/vecteezy_worker-climbs-the-bar-graph-with-the-green-arrow-up-career_16779656_364.png';
import pig from '../images/pngwing.com.png';
import networking from '../images/pngwing.com-2.png';

const Values = () => {
    return (
        <div className="relative h-1/2 w-screen bg-green-700 bg-opacity-78 flex justify-center items-center space-x-8 ">
            <div className="w-1/4 h-1/4 p-4 text-center flex flex-col justify-center items-center bg-green-700 bg-opacity-78 ">
                <h1 className='text-opacity-78 text-5xl font-bold text-gray-200'>CAREER</h1>
                <div className='flex justify-center py-8 mb-2'>
                    <img className='w-48 h-48 object-cover' src={man} alt="manWalking"/>
                </div>
                <p className='text-gray-200 text-lg'>
                    Connect students with career opportunities like internships and jobs in the FinTech industry
                </p>
            </div>
            <div className="w-1/4 h-1/4 p-4  border-green-700 border-opacity-78 text-center flex flex-col justify-center items-center bg-green-700 bg-opacity-78 ">
                <h1 className='text-gray-200  text-opacity-78 text-5xl font-bold'>EDUCATION</h1>
                <div className='flex justify-center py-4'>
                    <img className='w-56 h-56 object-cover' src={pig} alt="pig"/>
                </div>
                <p className='text-gray-200 text-lg'>
                    Equip students with the proper industry knowledge knowledge, skills and current news/updates about FinTech.
                </p>
            </div>
            <div className="w-1/4 h-1/4 p-4 border-green-700 text-center flex flex-col justify-center items-center bg-green-700 bg-opacity-78 ">
                <h1 className='text-gray-200  text-opacity-78 text-5xl font-bold'>NETWORKING</h1>
                <div className='flex justify-center py-12'>
                    <img className='w-full h-40 object-cover' src={networking} alt="networking"/>
                </div>
                <p className='text-gray-200 text-lg'>
                    Build a community through networking opportunities with alumni, professors, and professionals.
                </p>
            </div>
        </div>
    );
};

export default Values;
