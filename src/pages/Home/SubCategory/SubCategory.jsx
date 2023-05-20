// import React from 'react';

import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const SubCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Football");

    useEffect(()=>{
        fetch(`https://b7a11-toy-marketplace-server-side-mirza-mohibul-hasan.vercel.app/toyscategory/${activeTab}`)
        .then(res => res.json())
        .then(result=> {
            setToys(result)
        })
    },[activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="mt-4 w-11/12 mx-auto mb-5">
            <h1 className="text-2xl font-bold text-center my-3">Toys by category</h1>
            <div className="flex justify-center gap-2">

                <button onClick={()=>handleTabClick('Football')} 
                className={`${activeTab=="Football"?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}
                >Football</button>

                <button onClick={()=>handleTabClick('Cricket')} 
                className={`${activeTab=="Cricket"?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}
                >Cricket</button>

                <button onClick={()=>handleTabClick('Boxing')} 
                className={`${activeTab=="Boxing"?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}
                >Boxing</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {
                    toys.map(toy=><ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default SubCategory;