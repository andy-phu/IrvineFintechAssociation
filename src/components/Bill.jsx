import React from "react";
import BillPic from '../images/ProfMaurer.jpg';
import { AiOutlineMail } from "react-icons/ai";

const Bill = () => {
  return (
    <div className='h-3/4 mb-10 mt-28 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
            BILL MAURER
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>Dean, Professor</h1>
        <h1 className='text-lg font-bold tracking-widest text-black italic'>School of Social Sciences</h1>       
        <div className='pt-4 flex'>
          <div className='w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden">
              <img
                src={BillPic}
                alt="Bill Maurer"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 '>
                <a href="mailto: wmmaurer@uci.edu">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>

          </div>
          <div className='w-2/3 pl-16'>
            <div className='border border-white text-black text-xl'>
                <div>
                    <ul className="list-disc">
                        <li> <span className='font-bold text-green-700 text-opacity-78'>Research:</span> Offshore Financial Services, Mobile Money Transfers, Alt-Currencies, Blockchain</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
