// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyRow from "./ToyRow";
import { ToastContainer, toast } from "react-toastify";

const MyToys = () => {
    const { user} = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([])
    const [sort, setSort] = useState(0);
    const url = `http://localhost:5000/mytoys?email=${user?.email}&sort=${sort}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
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
    }, [url])
    const handleTabClick = (value) => {
        setSort(value);
    };
    return (
        <div className="w-11/12 mx-auto">
            <ToastContainer />
            <div className="md:flex justify-center gap-2 my-5 items-center">
                <span className="text-lg font-semibold">Sort By: </span>
                <button onClick={()=>handleTabClick(1)} className={`${sort==1?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}>Price Low to High</button>
                <button onClick={()=>handleTabClick(-1)} className={`${sort==-1?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0`}>Price High to low</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    <thead >
                        <tr>
                            <th>Toy Images</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {
                            mytoys.map(mytoy => <ToyRow key={mytoy._id} mytoy={mytoy}></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;