// import React from 'react';

import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const alltoys = useLoaderData()
    console.log(alltoys)
    return (
        <div>
            <h1>Hello from All Toys</h1>
        </div>
    );
};

export default AllToys;