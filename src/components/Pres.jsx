import React from "react";
import Rishika from '../images/rishika.png';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Pres = () => {
  return (
    <div className='h-screen mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
            RISHIKA MURARKA
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>President & Founder</h1>
        <div className='pt-4 flex'>
          <div className='w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden">
              <img
                src={Rishika}
                alt="Rishika"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 '>
                <a href="https://www.linkedin.com/in/rishika-murarka" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:rmurarka@uci.edu">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>

          </div>
          <div className='w-2/3 pl-16'>
            <div className='border border-white text-black text-xl'>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>3rd</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Computer Science and Business Economics 
</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Intelligent Systems (AI) </span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>None</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Mumbai, India</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Teaching Assistant for MGMT 30A/B (Accounting Courses) and ICS 6B, EVP at Hedge Fund Society at UCI, Software Applications Intern at Avanath Capital, Deloitte Diversity Program Mentee</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Running, Reading </span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>“Community is about finding people who share the same vision as you.” In the realm of financial technology, I'm committed to fostering a community driven to explore and innovate. It is my  mission to educate and empower, and my vision is to transform this collective into the leaders who will shape tomorrow's fintech landscape."</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pres;
