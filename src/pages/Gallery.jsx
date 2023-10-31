import React from "react"
import Navbar from '../components/Navbar'
import GalleryHero from "../components/GalleryHero";
import Footer from "../components/Footer";
import GalleryBody1 from "../components/GalleryBody1";
//import GalleryBody2 from "../components/GalleryBody2";
//import Event from '../components/Event'


const Gallery = () => {
    return (
        <div className='overflow-hidden font-raleway text-gray-200'>
            <Navbar/>
            <GalleryHero/>
            <GalleryBody1/>


            <Footer/>
        </div>






    );
};

export default Gallery;


//<Event/>