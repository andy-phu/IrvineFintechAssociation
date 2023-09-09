import React from "react";
import Coming from '../images/—Pngtree—coming soon vector template design_4146817.png';
import MeetJoin from '../components/MeetJoin'
import Navbar from '../components/Navbar'


const Joinus = () => {
  return (

   <div>
        <Navbar/>
        <MeetJoin/>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img className='h-1/2 w-1/2' src={Coming} alt="Coming Soon Picture" />
            </div>
        </div>

   </div> 
  )
};

export default Joinus;
