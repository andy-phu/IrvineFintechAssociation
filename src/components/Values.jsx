import React from "react";
import cha from '../images/ifa-chaTea.png';
import firstMeeting from '../images/ifa-firstMeeting.png';
import secondMeeting from '../images/ifa-secondMeeting.png';

const Values = () => {
    return (
        <div className="relative h-1/2 w-screen flex flex-col justify-center items-center lg:space-x-8 pt-10 pb-64">
            <div className ="flex justify-center text-5xl lg:text-6xl text-green-700 text-opacity-78 font-extrabold tracking-widest pb-10">
                OUR GOALS
            </div>
            <div className='flex justify-center items-center text-center lg:space-x-12 space-y-10 lg:space-y-0 flex-col lg:flex-row '>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4 text-center flex flex-col justify-center items-center">
                    <div className='text-opacity-78 text-2xl tracking-widest font-bold text-black mb-2'>CAREER</div>
                    <div className='flex justify-center mb-2'>
                        <img className='w-full h-full' src={secondMeeting} alt="second meeting"/>
                    </div>
                    <div className='text-black text-lg'>
                        Equip students with the proper industry knowledge, skills and current news/updates about FinTech.
                    </div>
                </div>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4 text-center flex flex-col justify-center items-center">
                    <div className='text-opacity-78 text-2xl font-bold tracking-widest text-black mb-2'>EDUCATION</div>
                    <div className='flex justify-center mb-2'>
                        <img className='w-full h-full object-cover' src={firstMeeting} alt="first meeting"/>
                    </div>
                    <div className='text-black text-lg'>
                        Equip students with the proper industry knowledge, skills and current news/updates about FinTech.
                    </div>
                </div>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4  text-center flex flex-col justify-center items-center">
                    <div className='text-opacity-78 text-2xl font-bold tracking-widest text-black mb-2'>NETWORKING</div>
                    <div className='flex justify-center mb-2'>
                        <img className='w-full h-full object-cover' src={cha} alt="cha for tea fundraiser"/>
                    </div>
                    <div className='text-black text-lg'>
                        Build a community through networking opportunities with alumni, professors, and professionals.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
