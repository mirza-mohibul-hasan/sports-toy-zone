// import React from 'react';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavigationBar = () => {
    const { logOut, user} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut();
    }
    return (
        <nav className='mt-4 w-11/12 mx-auto mb-5 md:flex justify-between items-center text-center '>

            <div>
                <h1 className='text-3xl font-bold'>Sports Toys</h1>
            </div>
            <div className='font-semibold grid grid-cols-3 md:grid-cols-5'>
                <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Home</NavLink>
                <NavLink to='/alltoys' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>All Toys</NavLink>
                {
                    user&&<>
                    <NavLink to='/mytoys' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>My Toys</NavLink>
                    <NavLink to='/addatoy' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Add A Toy</NavLink>
                    </>
                }
                <NavLink to='/blogs' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Blogs</NavLink>
            </div>
            <div className='flex justify-center'>
                {/* <button className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log out</button>
                    <Link to='/login'><button className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log in</button></Link> */}
                {
                    user && <button className="w-8 tooltip tooltip-left tooltip-info" data-tip={user?.displayName}>
                        <img src={user?.photoURL} className='rounded-3xl' alt="" />
                    </button>
                }
                {

                    user ? <button onClick={handleLogOut} className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log out</button> :
                        <Link to='/login'><button className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log in</button></Link>
                }
            </div>
            {/* <div className='flex justify-center'>
                {
                    user && <button data-tooltip-id="my-tooltip" 
                    data-tooltip-content={user?.displayName} 
                    data-tooltip-place="left" className='w-8'>
                        <Tooltip id="my-tooltip"  className='example'/>
                        <img src={user?.photoURL} className='rounded' alt="" />
                    </button>
                }
                {
                    user?<button onClick={handleLogOut} className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log out</button>:
                    <Link to='/login'><button className='bg-[#2196f3] py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log in</button></Link>
                }
            </div> */}
            
        </nav>
    );
};

export default NavigationBar;