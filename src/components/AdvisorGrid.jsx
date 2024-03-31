import React from 'react';
import andy from '../images/ifaAndy.jpg';
import { Link } from "react-router-dom";
import jinfei from '../images/Jinfei-Sheng.JPG.png';
import bill from '../images/ProfMaurer.jpg';

const AdvisorGrid = () => {
  return (
    <div id='boardGrid' className=' h-full lg:h-screen flex justify-center items-center flex-col'>
      <div className='text-black text-center  pt-20 text-lg lg:text-4xl'>
        SHAPING HISTORY TOGETHER
      </div>

      <div className="flex flex-col justify-center lg:flex-row lg:space-x-10 space-y-8 mb-8 w-2/3">
        <div className="w-full lg:w-1/3 lg:h-96 h-1/4 mt-8 relative">
          <div className="w-full h-full bg-black">
            <Link to="/president">            
              <img className='w-full h-full filter grayscale brightness-75 transition duration-500 hover:grayscale-0 hover:cursor-pointer ' src={bill} alt="bill"/>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 text-white pl p-6 pb-2">
            <div className="text-2xl font-extrabold">BILL MAURER</div>
            <div className="text-sm">DEAN, PROFESSOR</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:h-96 h-1/4 mt-8 relative">
          <div className="w-full h-full bg-black">
            <Link to="/technology">            
              <img className='w-full h-full filter grayscale brightness-75 transition duration-500 hover:grayscale-0 hover:cursor-pointer ' src={jinfei} alt="jinfei"/>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 text-white pl-6 pb-2">
            <div className="text-2xl font-extrabold">JINFEI SHENG</div>
            <div className="text-sm">ASSISTANT PROFESSOR OF FINANCE</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdvisorGrid;
