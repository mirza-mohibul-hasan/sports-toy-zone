// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Footer from "../pages/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FadeLoader } from "react-spinners";

const Main = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="flex justify-center items-center">
                {
                    loading && <FadeLoader className=" my-52" color="#36d7b7" />
                }
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;