import React from "react";
import Andy from '../images/ifaAndy.jpg';
import { AiFillLinkedin, AiOutlineMail} from "react-icons/ai";

const Tech = () => {
  return (
    <div className='h-screen mb-10 flex justify-center items-center'>
      <div className='border border-white h-4/5 w-4/5 flex flex-col'>
        <div className='pb-2'>
          <h1 className='text-3xl font-extrabold text-green-700 text-opacity-78 tracking-widest'>
            ANDY PHU
          </h1>
        </div>
        <h1 className='text-2xl font-bold tracking-widest text-black italic'>Vice President of Technology</h1>
        <div className='pt-4 flex'>
          <div className='w-1/3 flex justify-start items-center flex-col'>
            <div className="w-full h-full bg-gray-300 relative overflow-hidden">
              <img
                src={Andy}
                alt="Andy"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='flex justify-center pt-2 space-x-2 '>
                <a href="https://www.linkedin.com/in/andyphuu/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
                <a href="mailto:phuat@uci.edu" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail  className='w-8 h-8 text-black hover:opacity-60'/>
                </a>
            </div>
          </div>
          <div className='w-2/3 pl-16'>
            <div className='border border-white text-black text-xl'>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>YEAR:</span> <span className='text-black'>4th</span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MAJOR:</span> <span className='text-black'>Computer Science</span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EMPHASIS:</span> <span className='text-black'>Web Development, Artificial Intelligence</span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>MINOR:</span> <span className='text-black'>None</span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOMETOWN:</span> <span className='text-black'>Torrance, CA</span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>EXPERIENCE:</span> <span className='text-black'>Hack At UCI Corporate Outreach Organizer, Code Ninjas Coding Instructor, Facebook Career Connections Digital Marketing Intern</span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>HOBBIES:</span> <span className='text-black'>Gym, Music Festivals, Tennis, Basketball, Keyboards </span>
                </p>
                <p className='pb-2'>
                  <span className=' text-green-700 text-opacity-78 font-bold'>WHY IFA?:</span> <span className='text-black'>"Being a Computer Science student, I've always been captivated by the fascinating overlap of technology and finance. The GameStop incident, in particular, ignited a keen interest in the stock market, ultimately guiding me towards the Irvine Finance Association. I'm thrilled to embark on a journey of learning and collaboration with like-minded peers, delving into the realm of financial technology. This presents an exciting chance to play a part in revolutionizing our approach to finance in this digital age."</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
