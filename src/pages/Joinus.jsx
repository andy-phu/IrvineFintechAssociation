import React from "react";
import MeetJoin from '../components/BoardJoin'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Joinus = () => {
  return (

   <div className='overflow-hidden'>
        <Navbar/>
        <MeetJoin/>
        <Form/>
        <Footer/>
   </div> 
  )
};

export default Joinus;
