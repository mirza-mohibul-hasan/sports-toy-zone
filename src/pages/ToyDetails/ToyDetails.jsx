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
            <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row">
                <img className="flex-1 max-h-72 rounded-xl" src={toyImg} alt="Movie" />
                <div className="card-body flex-1">
                    <h2 className="card-title text-3xl font-semibold">Name: {toyName}</h2>
                    <h2 className="text-lg font-semibold">Seller: {sellerName}</h2>
                    <h2 className="text-lg font-semibold">Contsct: {sellerEmail}</h2>
                    <div className="flex gap-5">
                        <h2 className="text-md font-semibold">Price: ${price}</h2>
                        <h2 className="flex items-center text-md font-semibold">Ratings: {rating} <AiFillStar></AiFillStar></h2>
                    </div>
                    <h2 className="text-m font-semibold">Available Quantity: {quantity}</h2>
                    <h2><span className="font-semibold">Description:</span> {description}</h2>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;