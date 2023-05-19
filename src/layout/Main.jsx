// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Footer from "../pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
const Main = () => {
    return (
        <div>
            <ToastContainer />
            <NavigationBar></NavigationBar>

            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;