import React from "react";
import Andy from '../images/ifaAndy.jpg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Tech = () => {
  return (
    <div className=' flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2 flex justify-center lg:justify-start text-center'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest '>
            ANDY PHU
          </h1>
        </div >
        <div className='pb-2 flex justify-center lg:justify-start text-center'>
          <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Technology</h1>
        </div>

        <div className='lg:pt-6 pt-2 flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
              <img
                src={Andy}
                alt="Andy"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 pb-4 lg:pb-0'>
                <a href="https://www.linkedin.com/in/andyphuu/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:phuat@uci.edu">
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
                  <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Computer Science</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Web Development, Artificial Intelligence</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>None</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Torrance, CA</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Hack At UCI Corporate Outreach Organizer, Code Ninjas Coding Instructor, Facebook Career Connections Digital Marketing Intern</span>
                </p>
                <p className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Gym, Music Festivals, Tennis, Basketball, Keyboards</span>
                </p>
                <div className=''>
                  <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"As a Computer Science student, I'm passionate about software engineering and have developed a keen interest in the stock market - especially after the GameStop incident. This led me to the Irvine Finance Association. I see this as a unique opportunity to merge cutting-edge technology with the world of finance."</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
