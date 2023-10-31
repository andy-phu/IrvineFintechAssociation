import React from 'react'
import firstMeeting from '../images/ifa-firstMeeting.png';
import aif from '../images/ifa-AIF.jpeg';
import cha from '../images/ifa-chaTea.png';
import secondMeeting from '../images/ifa-secondMeeting.png';

const GalleryBody = () => {
    return (
        <div id='gallery' className="h-full flex justify-center items-center">
            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 mb-8">
                <div className="w-64 h-64 bg-black mt-8">
                    <img className='w-full h-full object-cover' src={aif} alt="anteater involvment fair"/>
                </div>
                <div className="w-64 h-64 bg-black">
                    <img className='w-full h-full object-cover' src={firstMeeting} alt="first meeting"/>
                </div>
                <div className="w-64 h-64 bg-blackmt-10">
                    <img className='w-full h-full object-cover' src={secondMeeting} alt="second meeting"/>
                </div>
                <div className="w-64 h-64 bg-black ">
                    <img className='w-full h-full object-cover' src={cha} alt="cha for tea fundraiser"/>
                </div>
            </div>
        </div>
    );
};

export default GalleryBody
