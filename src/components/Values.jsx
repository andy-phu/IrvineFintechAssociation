import React from "react";
// import man from '../images/vecteezy_worker-climbs-the-bar-graph-with-the-green-arrow-up-career_16779656_364.png';
// import pig from '../images/pngwing.com.png';
// import networking from '../images/pngwing.com-2.png';
import cha from '../images/ifa-chaTea.png';
import firstMeeting from '../images/ifa-firstMeeting.png';
import secondMeeting from '../images/ifa-secondMeeting.png';

const Values = () => {
    return (
        <div className="relative h-screen w-screen bg-opacity-78 flex flex-col justify-center items-center lg:space-x-8 mb-6 pt-10 pb-14">
            {/* <h1 className='text-6xl font-extrabold mt-8 mb-12 text-black'>
                OUR GOALS
            </h1> */}
            <div className='flex justify-center items-center text-center lg:space-x-12 space-y-10 lg:space-y-0 flex-col lg:flex-row'>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4 text-center flex flex-col justify bg-opacity-78 bg-red-600">
                    <div className='text-opacity-78 text-4xl font-bold text-black mb-2'>CAREER</div>
                    <div className='flex justify-center mb-2'>
                        <img className='w-full h-full object-cover' src={secondMeeting} alt="second meeting"/>
                    </div>
                    <div className='text-black text-lg'>
                        Connect students with career opportunities, such as internships and full-time positions in the dynamic FinTech industry.
                    </div>

                </div>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4 text-center flex flex-col justify-center items-center bg-opacity-78">
                    <div className='text-opacity-78 text-4xl font-bold text-black mb-2'>EDUCATION</div>
                    <div className='flex justify-center mb-2'>
                        <img className='w-full h-full object-cover' src={firstMeeting} alt="first meeting"/>
                    </div>
                    <div className='text-black text-lg'>
                        Equip students with the proper industry knowledge, skills and current news/updates about FinTech.
                    </div>
                </div>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4  text-center flex flex-col justify-center items-center bg-opacity-78 ">
                    <div className='text-opacity-78 text-4xl font-bold text-black mb-2'>NETWORKING</div>
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
