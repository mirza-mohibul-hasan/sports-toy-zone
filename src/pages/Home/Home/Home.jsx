// import React from 'react';

import Gallery from "../../Gallery/Gallery";
import SubCategory from "../../SubCategory/SubCategory";
import Banner from "../../Banner.jsx/Banner";
import Latest from "../../Latest/Latest";
import ContactUs from "../../Reviews/Reviews";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <Latest></Latest>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;