import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-transparent.png'
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import andy from '../images/ifaAndy.jpg';


const TechnologyInfo = () => {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

    // Update isMobileView when window is resized
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 640);
      };
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
        

      <div className={isMobileView ? '' : ''}>
        {/* For mobile view */}
        {isMobileView && (
          <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center pt-32'>
              <div className='pb-2 flex justify-center lg:justify-start text-center'>
                <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
                    ANDY PHU
                </h1>
              </div>
  
              <div className='pb-2 flex justify-center lg:justify-start text-center'>
                <h1 className='text-2xl font-bold tracking-widest text-black italic mx-2'>PRESIDENT</h1>
              </div>
  
              <div className='w-full lg:w-1/3 flex justify-start items-center flex-col'>
                <div className="w-3/4 h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
                  <img
                    src={andy}
                    alt="andy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className='flex justify-center pt-2 space-x-2 items-center pb-4'>
                  <a href="https://www.linkedin.com/in/andyphuu/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                  </a>
                  <a href="mailto:phuat@uci.edu" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                  </a>
                </div>
              </div>
  
              <div className='border border-white text-black text-xl flex flex-col w-3/4 pb-10'>
                <p>
                  <span className=' text-black text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>4th</span>
                </p>
                <p>
                  <span className=' text-black text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Computer Science</span>
                </p>
                <p>
                    <span className=' text-black text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Torrance, CA</span>
                </p>
                <p>
                  <span className=' text-black text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Esports Arena Software Engineer Intern, ICSSC Software Engineer, Hack At UCI Corporate Outreach Organizer, Code Ninjas Coding Instructor, Facebook Career Connections Digital Marketing Intern</span>
                </p>

              </div>
            </div>
          </div>
        )}
  
        {/* For larger screens */}
        {!isMobileView && (
          <div className='flex justify-center h-screen items-center pt-20'>
            <div className='border border-white h-4/5 w-5/6 flex flex-col'>
  

  
              <div className="pt-4 flex flex-row">
                <div className='flex w-2/3'>
                  <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
                    <div className='pb-2 flex justify-center lg:justify-start text-center'>
                        <h1 className='text-8xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
                        ANDY PHU
                        </h1>
                    </div>
        
                    <div className='pb-20 flex justify-center lg:justify-start text-center'>
                        <h1 className='text-lg font-bold tracking-widest text-black italic'>VP OF TECHNOLOGY</h1>
                    </div>
                    <p>
                        <span className=' text-black text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>4th</span>
                    </p>
                    <p>
                        <span className=' text-black text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Computer Science </span>
                    </p>
                    <p>
                        <span className=' text-black text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Torrance, CA</span>
                    </p>
                    <p>
                        <span className=' text-black text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Esports Arena Software Engineer Intern, ICSSC Software Engineer, Hack At UCI Corporate Outreach Organizer, Code Ninjas Coding Instructor, Facebook Career Connections Digital Marketing Intern</span>
                    </p>
                  </div>
  
                </div>
                <div className='w-1/3 flex justify-end flex-col '>
                  <div className="w-full h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
                    <img
                      src={andy}
                      alt="andy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className='flex justify-center pt-2 space-x-2 '>
                      <a href="https://www.linkedin.com/in/andyphuu/" target="_blank" rel="noopener noreferrer">
                          <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                      </a>
                      <a href="mailto:phuat@uci.edu">
                          <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                      </a>
                  </div>
  
                </div>
              </div>
  
  
  
            </div>
          </div>
        )}

      </div>
    );
};

export default TechnologyInfo;
