// import React from 'react';

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SubCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Football");

    useEffect(()=>{
        fetch(`http://localhost:5000/toyscategory/${activeTab}`)
        .then(res => res.json())
        .then(result=> {
            setToys(result)
            toast.success('Data read successfull', {
                position: "top-center",
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
        <div>
            <ToastContainer></ToastContainer>
            <h1>Sub Category is here</h1>
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
            <div>
                {
                    toys.map(toy=><div key={toy._id}>
                        <img className="w-44" src={toy.toyImg} alt="" />
                        <h1>{toy.toyName}</h1>
                        <p>${toy.price}</p>
                        <p>{toy.rating}</p>
                        <button>Details</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SubCategory;