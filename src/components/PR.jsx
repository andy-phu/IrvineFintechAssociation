import React from "react";
import Sahil from '../images/sahilIFA.jpg';

const PR = () => {
  return (
    <div className='h-screen mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
            RISHIKA MURARKA
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>PRESIDENT</h1>
        <div className='pt-4 flex'>
          <div className='w-1/3 flex justify-start'>
            <img className='w-auto h-auto' src={Sahil} alt="Sahil" />
          </div>
          <div className='w-2/3 pl-16'>
            <div className='border border-white text-black text-xl'>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>2nd</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Business Administration</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Finance, Marketing</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Digital Information Systems</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Yorba Linda, CA</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Digital Marketing Intern at Shaip, ASUCI At-Large Senator, ASUCI Mental Health Lead</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Theatre, Guitar and Piano, Cooking & consuming pasta</span>
                </p>
                <p className='pb-6'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>I joined IFA because of its unwavering commitment to fostering an environment where I can learn more about this industry as well as propel my career with great opportunities. IFA’s goals of creating a community stands out to me and I am excited to connect with other individuals that share the same passions as me and grow as a future business leader.</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PR;
