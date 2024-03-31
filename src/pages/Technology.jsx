import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-transparent.png'
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import TechnologyInfo from "../components/TechnologyInfo";
import BoardNav from '../components/BoardNav'
import Footer from '../components/Footer'
import Seperator from '../components/Seperator'

const Technology = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <BoardNav/>
            <TechnologyInfo/>
            <Footer/>
        </div>
     

    );
};

export default Technology;
