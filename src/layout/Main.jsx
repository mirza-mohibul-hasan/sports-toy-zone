// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Footer from "../pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
const Main = () => {
    return (
        <div className="bg-[#f6f0f0] md:-mt-5">
            <ToastContainer />
            <NavigationBar></NavigationBar>

            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;