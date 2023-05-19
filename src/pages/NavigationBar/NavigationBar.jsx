// import React from 'react';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavigationBar = () => {
    const { logOut, user } = useContext(AuthContext)
    const navItems = <>
        <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Home</NavLink>
        <NavLink to='/alltoys' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>All Toys</NavLink>
        {
            user && <>
                <NavLink to='/mytoys' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>My Toys</NavLink>
                <NavLink to='/addatoy' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Add A Toy</NavLink>
            </>
        }

        <NavLink to='/blogs' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Blogs</NavLink>
    </>
    const handleLogOut = () => {
        logOut();
    }
    return (
        <>
            <nav className='mt-4 w-11/12 mx-auto mb-5 md:flex justify-between items-center text-center '>

                <div>
                    <h1 className='text-3xl font-bold'>Sports Toys</h1>
                </div>
                <div className='font-semibold grid grid-cols-3 md:grid-cols-5'>
                    <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>Home</NavLink>
                    <NavLink to='/alltoys' className='font-bold mx-5 my-2 md:my-0 hover:text-[#2196f3]'>All Toys</NavLink>
                    {
                        user && <>
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

            </nav>
            <div className="navbar bg-base-100 mt-4 w-11/12 mx-auto mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <img src="" alt="" />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='h-full' alt="LOgo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
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
            </div>
        </>
    );
};

export default NavigationBar;