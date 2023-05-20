// import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="mt-4 w-11/12 mx-auto mb-5 rounded-xl hero min-h-screen" style={{ backgroundImage: `url("banner.webp")` }} >
            <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content" data-aos="flip-up">
                <div className="max-w-md md:max-w-4xl">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Find Your <span className="text-[#07dcca]">Toys Here</span></h1>
                    <p className="mb-5">Our toy shop is a magical wonderland filled with endless delights for children of all ages. From cuddly stuffed animals to educational toys, building sets to dolls, action figures to board games, there is something for every childs imagination to explore. Our arts and crafts section sparks creativity, while puzzles challenge young minds. Come and discover the joy of play in our vibrant toy shop.</p>
                    <button className='bg-[#0e87ea] py-2 px-3 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;