// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyRow from "./ToyRow";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([])
    const [activeTab, setActiveTab] = useState(0);
    const url = `http://localhost:5000/mytoys?email=${user?.email}&sort=${activeTab}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url, activeTab])
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="w-11/12 mx-auto">
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    <thead >
                        <tr>
                            <th>Toy Images</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {
                            mytoys.map(mytoy => <ToyRow key={mytoy._id} mytoy={mytoy}></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;