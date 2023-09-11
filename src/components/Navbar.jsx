import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-transparent.png'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className='absolute flex justify-between w-full z-10 text-gray-200 '>
            <div className='items-center pl-2 pt-2'>
                <img className='w-20 justify-start' src={logo} alt="logo"/>
            </div>

            <div className='flex items-center'>
                <Link to="/home" className=' text-gray-200 text-decoration-none text-lg font-bold px-6 hover:opacity-70'>HOME</Link>

                {/* Meet Us! Dropdown */}
                <div className='relative group'>
                    <button onClick={toggleDropdown} className='text-gray-200 text-decoration-none text-lg font-bold px-6 hover:opacity-70'>
                        MEET US!
                    </button>
                    {showDropdown && (
                        <div className='absolute left-2 mt-2 w-32 bg-gray-800 p-2 pb-2 text-center font-bold '>
                            <Link to="/board" className='text-gray-200 block py-2 text-decoration-none hover:opacity-70'>BOARD</Link>
                            <Link to="/advisors" className='text-gray-200 block py-2 text-decoration-none hover:opacity-70'>ADVISORS</Link>
                        </div>
                    )}
                </div>

                <Link to="/events" className='text-gray-200 text-decoration-none text-lg font-bold px-6 hover:opacity-70'>EVENTS</Link>
                <Link to="/joinus" className='text-gray-200 text-decoration-none text-lg font-bold pl-6 pr-8 hover:opacity-70'>JOIN US!</Link>
            </div>
        </div>
    );
};

export default Navbar;
