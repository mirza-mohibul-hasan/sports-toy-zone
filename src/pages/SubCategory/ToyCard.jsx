// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";
const ToyCard = ({ toy }) => {
    const { _id, toyName, price, rating, toyImg, description } = toy || {};
    const { user } = useContext(AuthContext)
    const detailsBtnToast = () => {
        if (!user) {
            toast.success('Login To View Details', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className="card card-side border-2 border-[#2195f33a] bg-[#2195f30e] shadow-xl flex-col md:flex-row">
            <ToastContainer />
            <div className="p-1 rounded-xl md:w-1/2">
                <img className="h-64 w-full md:w-72 rounded-xl" src={toyImg} alt="Toy Iamge" />
            </div>
            <div className="card-body md:w-1/2">
                <h2 className="card-title text-3xl">{toyName}</h2>
                <div className="flex">
                    <p className="text-lg">Price: ${price}</p>
                    <p className="flex items-center text-lg">Ratings: {rating} <AiFillStar></AiFillStar></p>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`} >
                        <button onClick={detailsBtnToast} className="bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ToyCard;