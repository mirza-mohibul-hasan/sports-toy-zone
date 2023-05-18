// import React from 'react';

import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className='mt-4 mx-3 md:mx-32 md:flex justify-between items-center text-center '>
            
            <div>
                <h1 className='text-3xl font-bold'>Cars Toy</h1>
            </div>
            <div className='font-semibold grid grid-cols-2 md:grid-cols-4'>
                <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:text-amber-500'>Home</NavLink>
                <NavLink to='/blog' className='font-bold mx-5 my-2 md:my-0 hover:text-amber-500'>Blogs</NavLink>
            </div>
            <div className='flex justify-center'>
                    <button className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log out</button>
                    <Link to='/login'><button className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log in</button></Link>
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
                    user?<button onClick={handleLogOut} className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log out</button>:
                    <Link to='/login'><button className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Log in</button></Link>
                }
            </div> */}
        </nav>
    );
};

export default NavigationBar;