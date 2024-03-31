import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-transparent.png'
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Sahil from '../images/sahilIFA.jpg';
import PresidentInfo from "../components/PresidentInfo";
import BoardNav from '../components/BoardNav'
import Footer from '../components/Footer'
import Seperator from '../components/Seperator'

const President = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <BoardNav/>
            <PresidentInfo/>
            <Footer/>
        </div>
     

    );
};

export default President;
