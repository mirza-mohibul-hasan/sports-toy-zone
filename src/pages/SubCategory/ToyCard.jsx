// import React from 'react';

const ToyCard = ({ toy }) => {
    return (
        <div>
            <img className="w-44" src={toy.toyImg} alt="" />
            <h1>{toy.toyName}</h1>
            <p>${toy.price}</p>
            <p>{toy.rating}</p>
            <button>Details</button>
        </div>
    );
};

export default ToyCard;