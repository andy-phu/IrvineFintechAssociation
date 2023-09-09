import React from "react";
import Sahil from '../images/sahilIFA.jpg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Mark2 = () => {
  return (
    <div className='h-screen mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
            DOMINIC BELTRAN
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Marketing</h1>
        <div className='pt-4 flex'>
          <div className='flex w-2/3'>
            <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>3rd</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Economics</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>None</span>
              </p>
              <p className='pb-2' >
                <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Management</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Fontana, CA</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>ASUCI, Northwestern Mutual Intern, UCI TDS</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Gym, Reading</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"I joined IFA because of its unwavering commitment to fostering an environment where I can learn more about this industry as well as propel my career with great opportunities. IFA’s goals of creating a community stands out to me and I am excited to connect with other individuals that share the same passions as me and grow as a future business leader."</span>
              </p>
            </div>
          </div>
          <div className='w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden">
              <img
                src={Sahil}
                alt="Sahil"
                className="object-cover w-full h-fullz"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2'>
                <a href="https://www.linkedin.com/company/irvine-fintech-association/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:dbeltra@uci.edu" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mark2;
