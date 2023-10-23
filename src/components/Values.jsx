import React from "react";
// import man from '../images/vecteezy_worker-climbs-the-bar-graph-with-the-green-arrow-up-career_16779656_364.png';
// import pig from '../images/pngwing.com.png';
// import networking from '../images/pngwing.com-2.png';
import AIF from '../images/ifa-AIF.jpeg';
import firstMeeting from '../images/ifa-firstMeeting.png';
import secondMeeting from '../images/ifa-secondMeeting.png';

const Values = () => {
    return (
        <div className="relative h-1/2 w-screen bg-green-700 bg-opacity-78 flex flex-col justify-center items-center lg:space-x-8 mb-6 pt-10 pb-14">
            <h1 className='text-6xl font-extrabold mt-8 mb-12'>
                OUR GOALS
            </h1>
            <div className='flex justify-center items-center text-center lg:space-x-12 space-y-10 lg:space-y-0 flex-col lg:flex-row '>
                <div className="w-2/3 h-2/3 lg:w-1/4 lg:h-1/4 text-center flex flex-col justify-center items-center bg-green-700 bg-opacity-78">
                    <h1 className='text-opacity-78 text-4xl font-bold text-gray-200 pb-2'>CAREER</h1>
                    <div className='flex justify-center py-8 mb-2'>
                        <img className='w-8/9 h-8/9 lg:w-48 lg:h-48 object-cover' src={AIF} alt="anteater involvement fair"/>
                    </div>
                    <p className='text-gray-200 text-lg'>
                        Connect students with career opportunities, such as internships and full-time positions in the dynamic FinTech industry.
                    </p>

                </div>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4  border-opacity-78 text-center flex flex-col justify-center items-center bg-green-700 bg-opacity-78 ">
                    <h1 className='text-gray-200 text-opacity-78 text-4xl font-bold'>EDUCATION</h1>
                    <div className='flex justify-center py-4'>
                        <img className='w-56 h-56 object-cover' src={firstMeeting} alt="first meeting"/>
                    </div>
                    <p className='text-gray-200 text-lg'>
                        Equip students with the proper industry knowledge, skills and current news/updates about FinTech.
                    </p>
                </div>
                <div className="w-3/4 h-3/4 lg:w-1/4 lg:h-1/4  text-center flex flex-col justify-center items-center bg-green-700 bg-opacity-78 ">
                    <h1 className='text-gray-200  text-opacity-78 text-4xl font-bold pb-2'>NETWORKING</h1>
                    <div className='flex justify-center py-12 mt-2'>
                        <img className='w-full h-40 object-cover' src={secondMeeting} alt="second meeting"/>
                    </div>
                    <p className='text-gray-200 text-lg'>
                        Build a community through networking opportunities with alumni, professors, and professionals.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Values;
