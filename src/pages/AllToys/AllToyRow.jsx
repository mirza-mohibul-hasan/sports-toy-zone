// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllToyRow = ({ toy, index}) => {
    const {user} = useContext(AuthContext)
    const {_id,
         category,
        price,
        quantity,
        sellerName,
        toyName } = toy || {};
        const detailsBtnToast = () =>{
            if(!user){
                toast.success('Login To View Details', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    return (
        <>
            <tr>
                <td>{index++}</td>
                <td className="text-sm">
                    {sellerName}
                </td>
                <td className="text-sm">
                    {toyName}
                </td>
                
                <td className="text-sm">
                    {category + ' Toy'}
                </td>
                <td className="text-sm">
                    {'$' + price}
                </td>
                <td className="text-sm">
                    {quantity}
                </td>
                <td className="text-sm">
                <Link to={`/toy/${_id}`} >
                        <button onClick={detailsBtnToast} className="bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white">View Details</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default AllToyRow;