import React from "react";
import JinfeiPic from '../images/Jinfei-Sheng.JPG.png';
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Jinfei = () => {
  return (
    <div className='h-3/4 mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
            JINFEI SHENG
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>Assistant Professor of Finance</h1>
        <h1 className='text-lg font-bold tracking-widest text-black italic'>Paul Merage School of Business</h1>       
        <div className='pt-4 flex'>
          <div className='flex w-2/3'>
            <div className='border border-white text-black text-xl flex flex-col justify-start pr-16'>
                <div className='flex justify-center items-center pt-10'>
                    <ul className="list-disc space-y-2">
                        <li> <span className='font-bold text-green-700 text-opacity-78'>Research: </span>Empirical Asset Pricing, Investments, Textual Analysis, ML, Financial Intermediation </li>
                        <li>Teaches MGMT 145 (FinTech) </li>
                    </ul>
                </div>
            </div>
          </div>
          <div className='w-1/3 flex justify-start items-center flex-col'>
            <div className="w-6/7 h-4/5 bg-gray-300 relative overflow-hidden ">
              <img
                src={JinfeiPic}
                alt="Jinfei Sheng"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 items-center'>
                <a href="mailto:jinfei.sheng@uci.edu" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jinfei;
