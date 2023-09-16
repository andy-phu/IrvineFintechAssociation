import React from 'react';
import aifFlyer from '../images/AIF Flyer Front FINAL -2.png';
import agenda from '../images/AIF Flyer Back FINAL .png';
import { Carousel } from 'react-bootstrap';

const Schedule = () => {
    return (
        <div className='flex flex-col justify-center items-center h-8/9 py-20'>
            <h1 className='text-5xl lg:text-7xl font-extrabold text-green-700 bg-opacity-78 tracking-wider pb-2'>HIGHLIGHTS</h1>
            <Carousel className='w-6/7 h-1/2 lg:w-1/3'>
                <Carousel.Item interval={1000}>
                    <div className="w-full h-1/2 flex justify-center items-center border-2  rounded">
                        <img 
                            className="w-full h-full object-cover"
                            src={aifFlyer}
                            alt='AIF Flyer'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="w-full h-1/2 flex justify-center items-center border-2  rounded">
                        <img 
                            className="w-full h-full object-cover"
                            src={agenda}
                            alt='agenda'
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Schedule;
