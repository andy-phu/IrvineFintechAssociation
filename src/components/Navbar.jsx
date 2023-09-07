import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-transparent.png'

const Navbar = () => {
    return (
        <div className='absolute flex justify-between w-full z-10 text-gray-200 '>
            <div className='items-center pl-2 pt-2'>
                <img className='w-20 justify-start' src={logo} alt="logo"/>
            </div>

            <div className='flex items-center'>
                <Link to="/home" className=' text-gray-200 text-decoration-none text-lg font-bold px-6'>HOME</Link>
                <Link to="/meetus" className='text-gray-200 text-decoration-none text-lg font-bold px-6'>MEET US!</Link>
                <Link to="/events" className='text-gray-200 text-decoration-none text-lg font-bold px-6'>EVENTS</Link>
                <Link to="/joinus" className='text-gray-200 text-decoration-none text-lg font-bold px-6'>JOIN US!</Link>
            </div>
        </div>
    );
};

export default Navbar;
