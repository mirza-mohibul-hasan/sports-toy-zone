// import React from 'react';

import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
    const toy = useLoaderData()
    const {
        description,
        price,
        quantity,
        rating,
        sellerEmail,
        sellerName,
        toyImg,
        toyName } = toy || {};
    useTitle('Toy Details')
    return (
        <div className="w-8/12 mx-auto my-10">
            <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row items-center">
                <img className="flex-1 max-h-72 rounded-xl m-3" src={toyImg} alt="Movie" />
                <div className="card-body flex-1">
                    <h2 className="card-title text-3xl font-semibold"><span className="text-gray-500">Name:</span> {toyName}</h2>
                    <h2 className="text-lg font-semibold"><span className="text-gray-500">Seller:</span>{sellerName}</h2>
                    <h2 className="text-lg font-semibold"><span className="text-gray-500">Contact:</span> {sellerEmail}</h2>
                    <div className="flex gap-2">
                        <p className="text-lg font-semibold">Price: ${price}</p>
                        <p className="flex items-center text-lg font-semibold">Ratings: {rating} <AiFillStar className="text-amber-500"></AiFillStar></p>
                    </div>
                    <h2 className="text-m font-semibold"><span className="text-gray-500">Available:</span> {quantity} Pieces</h2>
                    <h2><span className="font-semibold"><span className="text-gray-500">Description:</span></span> {description}</h2>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;