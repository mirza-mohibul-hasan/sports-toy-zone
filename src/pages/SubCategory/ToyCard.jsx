// import React from 'react';

import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
    const {_id, toyName, price, rating, toyImg } = toy || {};
    return (
        <div className="card card-side border-2 border-[#2195f33a] bg-[#2195f30e] shadow-xl flex-col md:flex-row">
            <div className="p-1 rounded-xl">
                <img className="h-64 w-full md:w-72 mx-auto rounded-xl" src={toyImg} alt="Toy Iamge" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>{price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toydetails/${_id}`}>
                        <button className="bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ToyCard;