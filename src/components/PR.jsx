import React from "react";
import Tiger from '../images/tigerPan.jpeg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const PR = () => {
  return (
    <div className='mb-10 lg:mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2 flex justify-center lg:justify-start text-center'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest '>
            TIGER PAN
          </h1>
        </div >
        <div className='pb-2 flex justify-center lg:justify-start text-center'>
          <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Public Relations</h1>
        </div>

        <div className='lg:pt-6 pt-2 flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
              <img
                src={Tiger}
                alt="Tiger"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 pb-4 lg:pb-0'>
                <a href="https://www.linkedin.com/in/boyu-pan-1086b31bb/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:boyup1@uci.edu">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>

          </div>
          <div className='w-full lg:w-2/3 lg:pl-16'>
            <div className='border border-white text-black text-xl'>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>4th</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Business Administration </span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Finance </span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>CS/Math</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Guangzhou, CN</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Oversea sales manager for KSPCC, Analyst intern at HPIS, part time at Uniroom, Server and Bartender at Shogun Oversea sales manager for KSPCC, Analyst intern at HPIS, part time at Uniroom, Server and Bartender at Shogun</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Fishing, Baking, Cooking, Food, Cardistry </span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"I joined IFA due to my strong interest in the fusion of finance and technology, particularly in the realms of cryptocurrency and robo-advising. My goal is to delve deeper into the world of fintech and its potential while sharing my own insights and learning from others. Fintech is a rapidly evolving field, and through IFA, I hope to foster a community where like-minded individuals can come together to explore, discuss, and navigate this dynamic landscape."</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PR;
