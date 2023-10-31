import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-transparent.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [nav,setNav] = useState(false)
    const style = {color:"white", opacity:"90%"}

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className='absolute flex justify-between w-full z-10 text-gray-200 '>
            <div className={`cursor-pointer flex absolute top-4 right-2`}>
                <AiOutlineMenu className='w-12 h-12 lg:hidden z-99 pr-2' style={style} size={30} onClick = {()=> setNav(!nav)}/>
            </div>
            <div className='items-center pl-2 pt-2'>
                <img className='w-20 justify-start' src={logo} alt="logo"/>
            </div>

            <div className='flex items-center'>
                <Link to="/home" className=' text-gray-200 text-decoration-none text-lg font-bold px-6 hover:opacity-70 sm-hidden'>HOME</Link>

                {/* Meet Us! Dropdown */}
                <div className='relative group'>
                    <button onClick={toggleDropdown} className='text-gray-200 text-decoration-none border-none text-lg font-bold px-6 hover:opacity-70 sm-hidden'>
                        MEET US!
                    </button>
                    {showDropdown && (
                        <div className='absolute left-2 mt-2 w-32 bg-gray-800 p-2 pb-2 text-center font-bold '>
                            <Link to="/board" className='text-gray-200 block py-2 text-decoration-none hover:opacity-70 sm-hidden'>BOARD</Link>
                            <Link to="/advisors" className='text-gray-200 block py-2 text-decoration-none hover:opacity-70 sm-hidden'>ADVISORS</Link>
                        </div>
                    )}
                </div>

                <Link to="/events" className='text-gray-200 text-decoration-none text-lg font-bold px-6 hover:opacity-70 sm-hidden'>EVENTS</Link>
                <Link to="/gallery" className='text-gray-200 text-decoration-none text-lg font-bold px-6 hover:opacity-70 sm-hidden'>GALLERY</Link>
                <Link to="/joinus" className='text-gray-200 text-decoration-none text-lg font-bold pl-6 pr-8 hover:opacity-70 sm-hidden'>JOIN US!</Link>
            </div>


            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 right-0'></div> : ''}
            {/*Side Drawer Menu*/}
            <div className={nav ? 'fixed top-0 right-0 w-screen h-screen bg-white z-10 duration-700': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >
                <AiOutlineClose style={style} size = {30} className='absolute right-4 top-4 cursor-pointer' onClick = {()=> setNav(!nav)}/>
                <div className='bg-black/95 h-screen'>
                    <nav className='flex justify-center items-center flex-col'>
                        <div className='pt-6 pl-6 h-1/2 w-1/2 mb-20'>
                            <img src={logo}  alt="ifa logo"/>
                        </div>
                        
                        <ul className='cursor-pointer  flex flex-col justify-center items-center'>
                            <Link onClick = {()=> setNav(!nav)} to="/home" spy={true} smooth={true} duration={500} offset={0}  className='text-4xl pb-8 text-green-700 text-opacity-78 font-bold flex flex-center no-underline' > HOME</Link>
                            <Link onClick = {()=> setNav(!nav)} to="/board" spy={true} smooth={true} duration={500}  offset={0}  className='text-4xl pb-8 text-green-700 text-opacity-78 font-bold flex-center no-underline' > BOARD</Link>
                            <Link onClick = {()=> setNav(!nav)} to="/advisors" spy={true} smooth={true} duration={500}  offset={0}  className='text-4xl pb-8 text-green-700 text-opacity-78 font-bold flex-center no-underline' > ADVISORS</Link>
                            <Link onClick = {()=> setNav(!nav)} to="/events" spy={true} smooth={true} duration={500}   offset={0} className='text-4xl pb-8 text-green-700 text-opacity-78 font-bold flex-center no-underline' > EVENTS</Link>
                            <Link onClick = {()=> setNav(!nav)} to="/gallery" spy={true} smooth={true} duration={500}   offset={0} className='text-4xl pb-8 text-green-700 text-opacity-78 font-bold flex-center no-underline' >GALLERY</Link>
                            <Link onClick = {()=> setNav(!nav)} to="/joinus" spy={true} smooth={true} offset={50} duration={500}   className='text-4xl pb-8 text-green-700 text-opacity-78 font-bold flex-center no-underline' > JOIN US!</Link>
                        </ul>
                    </nav>
                </div>
               
            </div>

        </div>
    );
};

export default Navbar;
