// import React from 'react';

import { useLoaderData } from "react-router-dom";

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
    return (
        <div className="w-8/12 mx-auto my-10">
            <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row">
                <figure className="flex-1"><img src={toyImg} alt="Movie" /></figure>
                <div className="card-body flex-1">
                <h2 className="card-title text-2xl font-semibold">{toyName}</h2>
                    <p>Seller: {sellerName}</p>
                    <p>Contsct: {sellerEmail}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;