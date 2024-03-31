import React from 'react';
import andy from '../images/ifaAndy.jpg';
import { Link } from "react-router-dom";
import mRishika from '../images/mobileRishika.png';

const BoardGrid = () => {
  return (
    <div id='boardGrid' className='mx-auto h-full lg:h-screen flex justify-center items-center flex-col'>
      <div className='text-black text-center  pt-20 text-lg lg:text-4xl'>
        SHAPING HISTORY TOGETHER
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 mb-8 w-2/3">
        <div className="w-full lg:w-1/3 lg:h-96 h-1/4 mt-8 relative">
          <div className="w-full h-full bg-black">
            <Link to="/president">            
              <img className='w-full h-full filter grayscale brightness-75 transition duration-500 hover:grayscale-0 hover:cursor-pointer ' src={mRishika} alt="Rishika"/>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 text-white pl-6 pb-2">
            <div className="text-2xl font-extrabold">RISHIKA MURARKA</div>
            <div className="text-sm">PRESIDENT</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:h-96 h-1/4 mt-8 relative">
          <div className="w-full h-full bg-black">
            <Link to="/technology">            
              <img className='w-full h-full filter grayscale brightness-75 transition duration-500 hover:grayscale-0 hover:cursor-pointer ' src={andy} alt="Andy"/>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 text-white pl-6 pb-2">
            <div className="text-2xl font-extrabold">ANDY PHU</div>
            <div className="text-sm">VP OF TECHNOLOGY</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:h-96 h-1/4 mt-8 relative">
          <div className="w-full h-full bg-black">
            <Link to="/president">            
              <img className='w-full h-full filter grayscale brightness-75 transition duration-500 hover:grayscale-0 hover:cursor-pointer ' src={andy} alt="Andy"/>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 text-white pl-6 pb-2">
            <div className="text-2xl font-extrabold">ANDY PHU</div>
            <div className="text-sm">VP OF TECHNOLOGY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardGrid;
