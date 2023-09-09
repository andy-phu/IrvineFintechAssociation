import React from "react";
import Carissa from '../images/carissa.jpeg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Fin = () => {
  return (
    <div className='h-screen mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
          CARISSA OSTERHOUDT
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Finance</h1>
        <div className='pt-4 flex'>
          <div className='flex w-2/3'>
            <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>2nd</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Business Administration</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Finance</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Digital Information Systems</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Irvine, California</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Director of Media at National Honor Society, Co-Founder and Vice-President of Sparkling Hearts Foundation, Mentee at Undergraduate Business Association</span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Baking, Playing table tennis, Graphic design </span>
              </p>
              <p className='pb-2'>
                <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"The Irvine FinTech Association provides me a space where I can further explore my passion for finance and technology, while also pursuing new and exciting opportunities. At the same time, I get to help create a community of individuals who are just as passionate about the FinTech industry."</span>
              </p>
            </div>
          </div>
          <div className='w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden">
              <img
                src={Carissa}
                alt="Carissa"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2  '>
                <a href="https://www.linkedin.com/in/carissaosterhoudt" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:costerho@uci.edu" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fin;
