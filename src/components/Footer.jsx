import React from "react";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='w-screen h-28 bg-green-700 bg-opacity-78 flex flex-col justify-center items-center pt-4 pb-4'>
            <p className=' text-gray-200 font-bold text-md pt-4 pb-0 tracking-widest'>Irvine FinTech Association</p>
            <div className='flex justify-center space-x-2 pt-0 pb-0 mt-0 mb-0'>
                <a href="https://www.linkedin.com/company/irvine-fintech-association/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-6  text-gray-200 hover:opacity-60'/>
                </a>
                <a href="https://www.instagram.com/irvinefintech/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram  className='w-8 h-6 text-gray-200 hover:opacity-60'/>
                </a>
            </div>
            <a href="https://phuportfolio.com" target="_blank" rel="noopener noreferrer" className='text-md italic pt-2 font-lobster text-gray-200 no-underline pb-2 hover:opacity-70'>Andy Phu</a>
        </div>
    );
};

export default Footer;
