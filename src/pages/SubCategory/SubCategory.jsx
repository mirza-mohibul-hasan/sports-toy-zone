// import React from 'react';

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ToyCard from "./ToyCard";

const SubCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Football");

    useEffect(()=>{
        fetch(`http://localhost:5000/toyscategory/${activeTab}`)
        .then(res => res.json())
        .then(result=> {
            setToys(result)
            toast.success('Data read successfull', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    },[activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="mt-4 w-11/12 mx-auto mb-5">
            <ToastContainer></ToastContainer>
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