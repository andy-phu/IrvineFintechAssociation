import React from "react";
import Livie from '../images/unnamed.jpg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Mark1 = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2 flex justify-center lg:justify-start text-center'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest '>
          LIVIE ANASTASYA
          </h1>
        </div >
        <div className='pb-2 flex justify-center lg:justify-start text-center'>
          <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Marketing</h1>
        </div>

        <div className='pt-4 flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
              <img
                src={Livie}
                alt="Livie"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 pb-4 lg:pb-0'>
                <a href="https://www.linkedin.com/company/irvine-fintech-association/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:liviaa@uci.edu">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>

          </div>
          <div className='w-full lg:w-2/3 lg:pl-16'>
            <div className='border border-white text-black text-xl'>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>3rd</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Economics </span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>None</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Accounting</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Jakarta, Indonesia</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Programs Intern at UCI International Center, IPG Mentor, SASA Mentee</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Dance, Travel, Brazilian Jiu-Jitsu</span>
                </p>
                <div className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"I am excited to be a part of IFA because I want to learn more about the fintech industry and also be more involved on campus while gaining valuable leadership experience. It also aligns with my future aspiration of pursuing a career in product management within the fintech space."</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mark1;
