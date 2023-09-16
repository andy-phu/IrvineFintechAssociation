import React, { useState, useEffect } from "react";
import Dominic from '../images/dominic.jpg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Mark2 = () => {
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
          <div className='flex flex-col items-center'>
            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
              DOMINIC BELTRAN

              </h1>
            </div>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-2xl font-bold tracking-widest text-black italic mx-2'>Vice President of Marketing</h1>
            </div>

            <div className='w-full lg:w-1/3 flex justify-start items-center flex-col'>
              <div className="w-3/4 h-3/4 bg-gray-300 relative overflow-hidden">
                <img
                  src={Dominic}
                  alt="Dominic"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className='flex justify-center pt-2 space-x-2 items-center pb-4'>
                <a href="https://www.linkedin.com/company/irvine-fintech-association/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:dbeltra@uci.edu" target="_blank" rel="noopener noreferrer">
                  <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
              </div>
            </div>

            <div className='border border-white text-black text-xl flex flex-col w-3/4'>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>3rd</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Economics</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>None</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Management</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Fontana, CA</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>ASUCI, Northwestern Mutual Intern, UCI TDS</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Gym, Reading</span>
              </p>
              <div>
                <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"I chose IFA because I am interested in learning more about FinTech and so I could gain numerous skills that will be useful in my everyday life. FinTech is something that I’ve been interested in for a while and as we innovate it is important to be informed of what new innovations are being made."</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* For larger screens */}
      {!isMobileView && (
        <div className='flex justify-center items-center'>
          <div className='border border-white h-4/5 w-4/5 flex flex-col'>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
              DOMINIC BELTRAN

              </h1>
            </div>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Marketing</h1>
            </div>

            <div className="pt-4 flex flex-row">
              <div className='pt-4 flex w-2/3'>
                <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>3rd</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Economics</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>None</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Management</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Fontana, CA</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>ASUCI, Northwestern Mutual Intern, UCI TDS</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Gym, Reading</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"I chose IFA because I am interested in learning more about FinTech and so I could gain numerous skills that will be useful in my everyday life. FinTech is something that I’ve been interested in for a while and as we innovate it is important to be informed of what new innovations are being made."</span>
                  </p>
                </div>

              </div>
              <div className='w-1/3 flex justify-end flex-col'>
                <div className="w-full h-full bg-gray-300 relative overflow-hidden">
                  <img
                    src={Dominic}
                    alt="Dominic"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className='flex justify-center pt-2 space-x-2 '>
                    <a href="https://www.linkedin.com/company/irvine-fintech-association//" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                    </a>
                    <a href="mailto:dbeltra@uci.edu">
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

export default Mark2;
