// import React from 'react';
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueCard from "./MarqueCard";
const Latest = () => {
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch('https://b7a11-toy-marketplace-server-side-mirza-mohibul-hasan.vercel.app/marquetoys')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setToys(data)})
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold text-center">Latest Toys</h1>
            <Marquee pauseOnHover={true}>
                {
                    toys.map(toy=> <MarqueCard key={toy._id} toy={toy}></MarqueCard>)
                }
            </Marquee>
        </div>
    );
};

export default Latest;