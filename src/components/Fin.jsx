import React, { useState, useEffect } from "react";
import Carissa from '../images/carissa.jpeg';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Fin = () => {
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
              CARISSA OSTERHOUDT
              </h1>
            </div>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-2xl font-bold tracking-widest text-black italic mx-2'>Vice President of Finance</h1>
            </div>

            <div className='w-full lg:w-1/3 flex justify-start items-center flex-col'>
              <div className="w-3/4 h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
                <img
                  src={Carissa}
                  alt="Carissa"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className='flex justify-center pt-2 space-x-2 items-center pb-4'>
                <a href="https://www.linkedin.com/in/carissaosterhoudt" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:costerho@uci.edu" target="_blank" rel="noopener noreferrer">
                  <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
              </div>
            </div>

            <div className='border border-white text-black text-xl flex flex-col w-3/4'>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>2nd</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Business Administration</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Finance</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Digital Information Systems</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Irvine, CA</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Director of Media at National Honor Society, Co-Founder and Vice-President of Sparkling Hearts Foundation, Mentee at Undergraduate Business Association</span>
              </p>
              <p>
                <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Baking, Playing table tennis, Graphic design</span>
              </p>
              <div>
                <span className=' text-green-700 text-opacity-78 font-bold mb-0'>WHY IFA?:</span> <span className='text-black'>"The Irvine FinTech Association provides me a space where I can further explore my passion for finance and technology, while also pursuing new and exciting opportunities. At the same time, I get to help create a community of individuals who are just as passionate about the FinTech industry."</span>
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
              CARISSA OSTERHOUDT
              </h1>
            </div>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Finance</h1>
            </div>

            <div className="pt-4 flex flex-row">
              <div className='flex w-2/3'>
                <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>2nd</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Business Administration</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Finance</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>Digital Information Systems</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Irvine, CA</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Director of Media at National Honor Society, Co-Founder and Vice-President of Sparkling Hearts Foundation, Mentee at Undergraduate Business Association</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Baking, Playing table tennis, Graphic design</span>
                  </p>
                  <p>
                    <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"The Irvine FinTech Association provides me a space where I can further explore my passion for finance and technology, while also pursuing new and exciting opportunities. At the same time, I get to help create a community of individuals who are just as passionate about the FinTech industry."</span>
                  </p>
                </div>

              </div>
              <div className='w-1/3 flex justify-end flex-col'>
                <div className="w-full h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
                  <img
                    src={Carissa}
                    alt="Carissa"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className='flex justify-center pt-2 space-x-2 '>
                    <a href="https://www.linkedin.com/in/carissaosterhoudt" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                    </a>
                    <a href="mailto:costerho@uci.edu">
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

export default Fin;
