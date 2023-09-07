import React from "react";
import affiliations from '../images/Daco_474383.png'
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='w-screen h-28 bg-green-700 bg-opacity-78 flex flex-col justify-center items-center pt-4 pb-4'>
            <p className=' text-gray-200 font-bold tracking-wider'>IRVINE FINTECH ASSOCIATION</p>
            <div className='flex justify-center space-x-2'>
                <a href="https://www.linkedin.com/company/irvine-fintech-association/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8  text-gray-200'/>
                </a>
                <a href="https://www.instagram.com/irvinefintech/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram  className='w-8 h-8 text-gray-200'/>
                </a>
            </div>
        </div>
    );
};

export default Footer;
