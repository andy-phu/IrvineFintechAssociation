import React, { useState, useEffect } from "react";
import ProfJinfei from '../images/Jinfei-Sheng.JPG.png';
import { AiOutlineMail } from "react-icons/ai";

const Jinfei = () => {
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
        <div className='flex justify-center items-center mb-10'>
          <div className='flex flex-col items-center'>
            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
              JINFEI SHENG
              </h1>
            </div>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-2xl font-bold tracking-widest text-black italic mx-2'>Assistant Professor of Finance</h1>
            </div>
            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-lg font-bold tracking-widest text-black italic mx-2'>Paul Merage School of Business</h1>
            </div>

            <div className='w-full mt-8 lg:mt-0 lg:w-1/3 flex justify-start items-center flex-col'>
              <div className="w-3/4 h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
                <img
                  src={ProfJinfei}
                  alt="Jinfei"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className='flex justify-center pt-2 space-x-2 items-center pb-4'>
                <a href="mailto:jinfei.sheng@uci.edu" target="_blank" rel="noopener noreferrer">
                  <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
              </div>
            </div>

            <div className='border border-white text-black text-xl flex flex-col w-3/4'>
                <ul className="list-disc space-y-2">
                    <li> <span className='font-bold text-green-700 text-opacity-78'>Research: </span>Empirical Asset Pricing, Investments, Textual Analysis, ML, Financial Intermediation </li>
                    <li>Teaches MGMT 145 (FinTech) </li>
                </ul>
            </div>
          </div>
        </div>
      )}

      {/* For larger screens */}
      {!isMobileView && (
        <div className='flex justify-center items-center mb-14 mt-6'>
          <div className='border border-white h-4/5 w-4/5 flex flex-col'>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
                JINFEI SHENG
              </h1>
            </div>

            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-2xl font-bold tracking-widest text-black italic'>Assistant Professor of Finance</h1>
            </div>
            <div className='pb-2 flex justify-center lg:justify-start text-center'>
              <h1 className='text-lg font-bold tracking-widest text-black italic'>Paul Merage School of Business</h1>
            </div>

            <div className="pt-4 flex flex-row">
              <div className='pt-4 flex w-2/3'>
                <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
                    <ul className="list-disc space-y-2">
                        <li> <span className='font-bold text-green-700 text-opacity-78'>Research: </span>Empirical Asset Pricing, Investments, Textual Analysis, ML, Financial Intermediation </li>
                        <li>Teaches MGMT 145 (FinTech) </li>
                    </ul>
                </div>

              </div>
              <div className='w-1/3 flex justify-end flex-col'>
                <div className="w-5/6 h-full bg-gray-300 relative overflow-hidden rounded shadow-2xl" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}>
                  <img
                    src={ProfJinfei}
                    alt="Jinfei"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className='flex justify-center pt-2 space-x-2 '>
                    <a href="mailto:jinfei.sheng@uci.edu">
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

export default Jinfei;
