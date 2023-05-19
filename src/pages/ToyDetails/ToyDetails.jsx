// import React from 'react';

import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div>
            <h1>Hello From Details</h1>
        </div>
    );
};

export default ToyDetails;