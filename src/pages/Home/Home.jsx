// import React from 'react';

import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory";
import Banner from "./Banner";
import Latest from "./Latest/Latest";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <Latest></Latest>
            <h1 className="text-center text-8xl">Extra 2</h1>
        </div>
    );
};

export default Home;