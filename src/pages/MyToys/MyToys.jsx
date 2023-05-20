// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyRow from "./ToyRow";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from "react-toastify";
const MyToys = () => {
    const { user} = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([])
    const [sort, setSort] = useState(0);
    const url = `https://b7a11-toy-marketplace-server-side-mirza-mohibul-hasan.vercel.app/mytoys?email=${user?.email}&sort=${sort}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, [url])

    const handleTabClick = (value) => {
        setSort(value);
    };

    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-mirza-mohibul-hasan.vercel.app/deletetoy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast.success('DELETE SUCCESSFULL', {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                            const remaining = mytoys.filter(toy => toy._id !==id)
                            setMytoys(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="w-11/12 mx-auto">
            <ToastContainer/>
            <div className="md:flex justify-center gap-2 my-5 items-center">
                <span className="text-lg font-semibold">Sort By: </span>
                <button onClick={()=>handleTabClick(1)} className={`${sort==1?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 hover:text-white font-semibold md:my-0`}>Price Low to High</button>
                <button onClick={()=>handleTabClick(-1)} className={`${sort==-1?"bg-[#2196f3] text-white":"text-[#2196f3] border border-[#2196f3]"} py-1 px-2 mx-1 rounded hover:bg-gray-500 hover:text-white font-semibold md:my-0`}>Price High to low</button>
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
                            mytoys.map(mytoy => <ToyRow key={mytoy._id} mytoy={mytoy} handleDelete={handleDelete}></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;